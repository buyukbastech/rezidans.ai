import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    problem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.problem) {
      toast.error(t.quoteDialog.errorFillAll);
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      company_name: formData.companyName,
      email: formData.email,
      problem: formData.problem,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Supabase insert error:", error);
      toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
      return;
    }

    setIsSuccess(true);
    toast.success(t.quoteDialog.successToast);
  };

  const handleClose = (newOpen: boolean) => {
    onOpenChange(newOpen);
    if (!newOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ companyName: "", email: "", problem: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-black/95 border border-[#ffad00]/30 backdrop-blur-2xl max-w-lg p-8 sm:p-10 text-foreground sm:rounded-sm shadow-[0_0_60px_rgba(255,173,0,0.12)]">
        <DialogHeader className="text-center sm:text-center space-y-3">
          <div className="flex items-center justify-center text-[#ffad00]">
            <span className="heading-display text-[11px] tracking-[0.4em] uppercase">
              {t.quoteDialog.badge}
            </span>
          </div>

          <DialogTitle className="heading-hero text-2xl sm:text-3xl text-white font-light tracking-[0.15em]">
            {t.quoteDialog.titleFirst} <span className="copper-text">{t.quoteDialog.titleSecond}</span>
          </DialogTitle>

          <div className="copper-line max-w-20 mx-auto my-2" />

          <DialogDescription className="text-muted-foreground text-xs sm:text-sm font-light tracking-wide max-w-sm mx-auto leading-relaxed">
            {t.quoteDialog.description}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-10 text-center space-y-5 animate-in fade-in-50 zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-full bg-[#ffad00]/10 border border-[#ffad00]/30 flex items-center justify-center mx-auto text-[#ffad00]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="heading-hero text-xl text-white">{t.quoteDialog.successTitle}</h4>
              <p className="text-muted-foreground text-xs font-light max-w-xs mx-auto leading-relaxed">
                {t.quoteDialog.successDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleClose(false)}
              className="mt-4 px-8 py-3 text-xs uppercase tracking-[0.3em] text-white border border-[#ffad00]/50 hover:bg-[#ffad00]/10 transition-colors duration-300 rounded-sm cursor-pointer"
            >
              {t.quoteDialog.closeButton}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="companyName" className="text-xs uppercase tracking-[0.2em] text-white/80 font-light">
                {t.quoteDialog.companyLabel} <span className="text-[#ffad00]">*</span>
              </Label>
              <Input
                id="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder={t.quoteDialog.companyPlaceholder}
                className="bg-white/[0.04] border-white/15 focus-visible:border-[#ffad00] focus-visible:ring-1 focus-visible:ring-[#ffad00]/50 text-white placeholder:text-white/25 text-sm h-11 rounded-sm transition-all"
              />
            </div>

            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-white/80 font-light">
                {t.quoteDialog.emailLabel} <span className="text-[#ffad00]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.quoteDialog.emailPlaceholder}
                className="bg-white/[0.04] border-white/15 focus-visible:border-[#ffad00] focus-visible:ring-1 focus-visible:ring-[#ffad00]/50 text-white placeholder:text-white/25 text-sm h-11 rounded-sm transition-all"
              />
            </div>

            <div className="space-y-2 text-left">
              <Label htmlFor="problem" className="text-xs uppercase tracking-[0.2em] text-white/80 font-light">
                {t.quoteDialog.problemLabel} <span className="text-[#ffad00]">*</span>
              </Label>
              <Textarea
                id="problem"
                required
                rows={3}
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                placeholder={t.quoteDialog.problemPlaceholder}
                className="bg-white/[0.04] border-white/15 focus-visible:border-[#ffad00] focus-visible:ring-1 focus-visible:ring-[#ffad00]/50 text-white placeholder:text-white/25 text-sm min-h-[90px] resize-none rounded-sm transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-6 text-xs uppercase tracking-[0.3em] font-medium text-black bg-gradient-to-r from-[#e69d00] via-[#ffad00] to-[#ffd276] hover:brightness-110 active:scale-[0.99] transition-all duration-300 rounded-sm shadow-[0_0_25px_rgba(255,173,0,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>{t.quoteDialog.submitting}</span>
                </>
              ) : (
                <>
                  <span>{t.quoteDialog.submitButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
