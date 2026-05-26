import React from 'react';
import { Copy, HeartHandshake, QrCode, Smartphone, Sparkles, X } from 'lucide-react';
import { trackPaymentFailureReport, trackSupportInteraction } from '../utils/analytics';

const PAYMENT_OPTIONS = [
  {
    id: 'primary',
    label: 'Primary UPI',
    upiId: 'krishnadhaval@upi',
    upiName: 'Ritesh',
    bank: 'upi',
    domain: 'upi',
    helper: 'Recommended payment route',
  },
  {
    id: 'secondary',
    label: 'Fallback UPI',
    upiId: 'ritesh.you.may.not.know@slc',
    upiName: 'Ritesh',
    bank: 'slice',
    domain: 'slc',
    helper: 'Use this if your app prefers the Slice handle',
  },
];
const SUGGESTED_AMOUNTS = [49, 99, 199, 499];

const SupportDeveloperCard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [amount, setAmount] = React.useState('99');
  const [failureHintShown, setFailureHintShown] = React.useState(false);
  const [activePaymentId, setActivePaymentId] = React.useState(PAYMENT_OPTIONS[0].id);

  const activePayment = PAYMENT_OPTIONS.find((option) => option.id === activePaymentId) ?? PAYMENT_OPTIONS[0];

  const normalizedAmount = amount.trim();
  const validAmount = normalizedAmount && Number(normalizedAmount) > 0 ? normalizedAmount : '';
  const upiLink = `upi://pay?pa=${encodeURIComponent(activePayment.upiId)}&pn=${encodeURIComponent(activePayment.upiName)}&cu=INR${
    validAmount ? `&am=${encodeURIComponent(validAmount)}` : ''
  }`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(upiLink)}`;

  const openSupport = () => {
    setIsOpen(true);
    setFailureHintShown(false);
    trackSupportInteraction('support_open', 'footer_support');
  };

  const closeSupport = () => {
    setIsOpen(false);
    trackSupportInteraction('support_close', 'footer_support');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activePayment.upiId);
      setCopied(true);
      trackSupportInteraction('support_copy_upi', `${activePayment.id}_upi_id_copy`);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy UPI ID', error);
    }
  };

  const handleAmountSelect = (value) => {
    setAmount(String(value));
    trackSupportInteraction('support_amount_select', `amount_${value}`, value);
  };

  const handleCustomAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePaymentOptionChange = (optionId) => {
    setActivePaymentId(optionId);
    setCopied(false);
    setFailureHintShown(false);
    trackSupportInteraction('support_payment_route_select', optionId);
  };

  const handlePaymentFailed = () => {
    setFailureHintShown(true);
    trackPaymentFailureReport('support_modal_failure_report', {
      payment_route: activePayment.id,
      receiver_upi_domain: activePayment.domain,
      receiver_bank: activePayment.bank,
      amount: Number(validAmount || 0) || undefined,
    });
  };

  return (
    <>
      <button
        onClick={openSupport}
        className="support-button group relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
      >
        <span className="support-button__halo" aria-hidden="true" />
        <span className="support-button__spark support-button__spark--left" aria-hidden="true">
          <Sparkles size={10} />
        </span>
        <span className="support-button__spark support-button__spark--right" aria-hidden="true">
          <Sparkles size={10} />
        </span>
        <HeartHandshake size={14} className="relative z-[1]" />
        <span className="relative z-[1]">Support the Developer</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/65 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-4 sm:py-6">
          <div className="w-full max-w-md overflow-hidden rounded-[2rem] border border-border/80 bg-background shadow-2xl">
            <div className="bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)] px-4 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Support the Developer</p>
                  <h2 className="mt-2 text-xl font-black tracking-tight text-foreground sm:text-2xl">Pay via UPI</h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Choose an amount, scan the QR, or continue in your UPI app.
                  </p>
                </div>
                <button
                  onClick={closeSupport}
                  className="rounded-full border border-border/80 bg-background/80 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  title="Close support panel"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {SUGGESTED_AMOUNTS.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAmountSelect(value)}
                    className={`rounded-full border px-3 py-2 text-xs font-bold transition-colors sm:text-sm ${
                      amount === String(value)
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background/80 text-foreground hover:bg-muted'
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
                onChange={handleCustomAmountChange}
                onBlur={() => trackSupportInteraction('support_amount_custom', `amount_${validAmount || 'empty'}`, Number(validAmount || 0))}
                placeholder="Custom amount"
                className="mt-3 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />

              <div className="mt-4 grid gap-2">
                {PAYMENT_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handlePaymentOptionChange(option.id)}
                    className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                      activePayment.id === option.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-background/60 hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{option.label}</p>
                        <p className="mt-1 break-all font-mono text-sm text-foreground">{option.upiId}</p>
                      </div>
                      {activePayment.id === option.id && (
                        <span className="rounded-full bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{option.helper}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
              <div className="rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 shadow-inner">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  <QrCode size={14} />
                  Scan to Pay
                </div>
                <div className="rounded-[1.5rem] bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
                  <img
                    src={qrImageUrl}
                    alt="UPI QR code for supporting the developer"
                    className="mx-auto aspect-square w-full max-w-[280px] rounded-2xl object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  {validAmount ? `Ready for Rs. ${validAmount}` : 'Enter an amount to generate a payment QR'}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-card/40 px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {activePayment.label}
                </p>
                <p className="mt-1 break-all font-mono text-sm text-foreground">{activePayment.upiId}</p>
              </div>

              <div className="mt-4 rounded-2xl border border-amber-500/25 bg-amber-500/8 px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                  Payment Help
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If Google Pay or Kotak blocks the current route, switch to the other UPI option or try another app or bank account.
                </p>
                <button
                  onClick={handlePaymentFailed}
                  className="mt-3 inline-flex cursor-pointer items-center justify-center rounded-full border border-amber-500/30 bg-background/80 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-amber-500/10"
                >
                  Payment failed?
                </button>
                {failureHintShown && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Logged for analytics. This usually points to a sender bank or app restriction, not a broken receiver UPI ID.
                  </p>
                )}
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={upiLink}
                  onClick={() =>
                    trackSupportInteraction(
                      'support_open_upi',
                      `${activePayment.id}_amount_${validAmount || 'empty'}`,
                      Number(validAmount || 0)
                    )
                  }
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Smartphone size={16} />
                  Open UPI App
                </a>
                <button
                  onClick={handleCopy}
                  className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-border px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
                >
                  <Copy size={16} />
                  {copied ? 'Copied' : 'Copy UPI ID'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportDeveloperCard;
