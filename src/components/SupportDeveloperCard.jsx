import React from 'react';
import { Copy, HeartHandshake, QrCode, Smartphone, X } from 'lucide-react';

const UPI_ID = 'ritesh.you.may.not.know@slc';
const UPI_NAME = 'Ritesh';
const SUGGESTED_AMOUNTS = [49, 99, 199, 499];

const SupportDeveloperCard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [amount, setAmount] = React.useState('99');

  const normalizedAmount = amount.trim();
  const validAmount = normalizedAmount && Number(normalizedAmount) > 0 ? normalizedAmount : '';
  const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&cu=INR${
    validAmount ? `&am=${encodeURIComponent(validAmount)}` : ''
  }`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiLink)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy UPI ID', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
      >
        <HeartHandshake size={14} />
        Support the Developer
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] border border-border bg-background p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Support the Developer</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground">Pay via UPI</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Close support panel"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Choose an amount, scan the QR, or open your UPI app directly.
            </p>

            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Amount (INR)</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SUGGESTED_AMOUNTS.map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(String(value))}
                    className={`rounded-xl border px-3 py-2 text-sm font-bold transition-colors ${
                      amount === String(value)
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-foreground hover:bg-muted'
                    }`}
                  >
                    Rs. {value}
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="1"
                step="1"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="Custom amount"
                className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-border bg-card/40 p-4">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <QrCode size={14} />
                Scan to Pay
              </div>
              <img
                src={qrImageUrl}
                alt="UPI QR code for supporting the developer"
                className="mx-auto aspect-square w-full max-w-[260px] rounded-2xl border border-border bg-white object-cover"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-card/40 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">UPI ID</p>
              <p className="mt-1 break-all font-mono text-sm text-foreground">{UPI_ID}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={upiLink}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Smartphone size={16} />
                Open UPI App
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
              >
                <Copy size={16} />
                {copied ? 'Copied' : 'Copy UPI ID'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportDeveloperCard;
