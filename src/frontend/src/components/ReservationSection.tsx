import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  guestName: string;
  phoneNumber: string;
  date: string;
  time: string;
  partySize: string;
  notes: string;
}

const initialForm: FormState = {
  guestName: "",
  phoneNumber: "",
  date: "",
  time: "",
  partySize: "",
  notes: "",
};

export function ReservationSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [confirmationId, setConfirmationId] = useState<string>("");

  const today = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.guestName.trim()) newErrors.guestName = "Full name is required";
    if (!form.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!form.date) newErrors.date = "Date is required";
    if (!form.time) newErrors.time = "Time is required";
    if (!form.partySize) newErrors.partySize = "Party size is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!actor) {
      toast.error(
        "Unable to connect to the reservation system. Please try again.",
      );
      return;
    }

    setStatus("loading");
    try {
      const id = await actor.makeReservation(
        form.guestName.trim(),
        form.phoneNumber.trim(),
        form.date,
        form.time,
        BigInt(Number.parseInt(form.partySize)),
        form.notes.trim() || null,
      );
      setConfirmationId(id.toString());
      setStatus("success");
      setForm(initialForm);
      toast.success(`Table reserved! Confirmation ID: #${id}`);
    } catch (err) {
      console.error("Reservation error:", err);
      setStatus("error");
      toast.error("Something went wrong. Please call us or try again.");
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="reservation"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-surface relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, oklch(0.60 0.14 42) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-terracotta/30" />
            <span className="eyebrow">Book a Table</span>
            <div className="h-px w-10 bg-terracotta/30" />
          </div>
          <h2 className="heading-section font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Reserve Your Table
          </h2>
          <p className="font-dm text-muted-foreground">
            Fill in the form or call us at{" "}
            <a
              href="tel:+918919296510"
              className="text-terracotta hover:text-terracotta/80 transition-colors font-semibold"
            >
              +91 89192 96510
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form — takes 2 cols */}
          <div className="lg:col-span-2">
            {/* Success state */}
            {status === "success" && (
              <motion.div
                data-ocid="reservation.success_state"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background border border-olive/40 rounded-sm p-8 text-center"
              >
                <CheckCircle size={44} className="text-olive mx-auto mb-4" />
                <h3 className="font-playfair text-2xl text-foreground font-semibold mb-2">
                  Reservation Confirmed!
                </h3>
                <p className="font-dm text-muted-foreground mb-3">
                  Your table has been reserved. We look forward to welcoming
                  you.
                </p>
                <p className="font-dm text-sm font-semibold text-terracotta">
                  Confirmation ID: #{confirmationId}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 font-dm text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Make another reservation →
                </button>
              </motion.div>
            )}

            {/* Form */}
            {status !== "success" && (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="bg-background border border-luxury rounded-sm p-6 md:p-8"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <Label
                      htmlFor="guestName"
                      className="font-dm text-sm font-medium text-muted-foreground mb-2 block"
                    >
                      Full Name <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="guestName"
                      data-ocid="reservation.name.input"
                      type="text"
                      placeholder="Your full name"
                      value={form.guestName}
                      onChange={(e) =>
                        handleChange("guestName", e.target.value)
                      }
                      className="bg-surface border-luxury text-foreground placeholder:text-muted-foreground/50 focus:border-terracotta/60 font-dm"
                      autoComplete="name"
                    />
                    {errors.guestName && (
                      <p className="font-dm text-xs text-destructive mt-1.5">
                        {errors.guestName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label
                      htmlFor="phoneNumber"
                      className="font-dm text-sm font-medium text-muted-foreground mb-2 block"
                    >
                      Phone Number <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="phoneNumber"
                      data-ocid="reservation.phone.input"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phoneNumber}
                      onChange={(e) =>
                        handleChange("phoneNumber", e.target.value)
                      }
                      className="bg-surface border-luxury text-foreground placeholder:text-muted-foreground/50 focus:border-terracotta/60 font-dm"
                      autoComplete="tel"
                    />
                    {errors.phoneNumber && (
                      <p className="font-dm text-xs text-destructive mt-1.5">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Party Size */}
                  <div>
                    <Label
                      htmlFor="partySize"
                      className="font-dm text-sm font-medium text-muted-foreground mb-2 block"
                    >
                      Party Size <span className="text-terracotta">*</span>
                    </Label>
                    <Select
                      value={form.partySize}
                      onValueChange={(v) => handleChange("partySize", v)}
                    >
                      <SelectTrigger
                        id="partySize"
                        data-ocid="reservation.partysize.select"
                        className="bg-surface border-luxury text-foreground focus:border-terracotta/60 font-dm"
                      >
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface border-luxury">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <SelectItem
                            key={n}
                            value={String(n)}
                            className="font-dm text-foreground"
                          >
                            {n === 10 ? "10+" : n}{" "}
                            {n === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.partySize && (
                      <p className="font-dm text-xs text-destructive mt-1.5">
                        {errors.partySize}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <Label
                      htmlFor="date"
                      className="font-dm text-sm font-medium text-muted-foreground mb-2 block"
                    >
                      Date <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="date"
                      data-ocid="reservation.date.input"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="bg-surface border-luxury text-foreground focus:border-terracotta/60 font-dm [color-scheme:dark]"
                    />
                    {errors.date && (
                      <p className="font-dm text-xs text-destructive mt-1.5">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <Label
                      htmlFor="time"
                      className="font-dm text-sm font-medium text-muted-foreground mb-2 block"
                    >
                      Time <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="time"
                      data-ocid="reservation.time.input"
                      type="time"
                      min="11:00"
                      max="23:00"
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="bg-surface border-luxury text-foreground focus:border-terracotta/60 font-dm [color-scheme:dark]"
                    />
                    {errors.time && (
                      <p className="font-dm text-xs text-destructive mt-1.5">
                        {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Special Requests */}
                  <div className="sm:col-span-2">
                    <Label
                      htmlFor="notes"
                      className="font-dm text-sm font-medium text-muted-foreground mb-2 block"
                    >
                      Special Requests{" "}
                      <span className="text-muted-foreground/50 text-xs">
                        (Optional)
                      </span>
                    </Label>
                    <Textarea
                      id="notes"
                      data-ocid="reservation.notes.textarea"
                      placeholder="Dietary restrictions, birthday celebrations, preferred seating..."
                      value={form.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      className="bg-surface border-luxury text-foreground placeholder:text-muted-foreground/50 focus:border-terracotta/60 font-dm min-h-[100px] resize-none"
                    />
                  </div>
                </div>

                {/* Error state */}
                {status === "error" && (
                  <motion.div
                    data-ocid="reservation.error_state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-sm"
                  >
                    <AlertCircle
                      size={14}
                      className="text-destructive flex-shrink-0"
                    />
                    <p className="font-dm text-xs text-destructive">
                      Something went wrong. Please call +91 89192 96510 or try
                      again.
                    </p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  data-ocid="reservation.submit_button"
                  disabled={status === "loading"}
                  className="mt-6 w-full font-dm font-semibold text-base py-4 bg-terracotta text-white rounded-sm hover:bg-terracotta/85 transition-all duration-200 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                        data-ocid="reservation.loading_state"
                      />
                      Confirming Reservation...
                    </>
                  ) : (
                    "Confirm Reservation"
                  )}
                </button>

                <p className="font-dm text-xs text-muted-foreground/60 text-center mt-3">
                  We'll confirm your reservation via phone. Open 11 AM – 11 PM
                  daily.
                </p>
              </motion.form>
            )}
          </div>

          {/* Right info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="bg-terracotta rounded-sm p-7 text-white flex flex-col gap-6 lg:sticky lg:top-24"
          >
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                Sky Salt
              </h3>
              <p className="font-dm text-sm text-white/70">Cafe &amp; Bistro</p>
            </div>

            <div className="h-px bg-white/20" />

            <div className="flex items-start gap-3">
              <Phone size={16} className="text-white/60 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-dm text-xs text-white/60 mb-0.5">Phone</p>
                <a
                  href="tel:+918919296510"
                  className="font-dm text-sm font-semibold text-white hover:text-white/80 transition-colors"
                >
                  +91 89192 96510
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={16} className="text-white/60 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-dm text-xs text-white/60 mb-0.5">
                  Opening Hours
                </p>
                <p className="font-dm text-sm font-semibold text-white">
                  11:00 AM – 11:00 PM
                </p>
                <p className="font-dm text-xs text-white/60 mt-0.5">
                  Every day
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-white/60 flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="font-dm text-xs text-white/60 mb-0.5">Address</p>
                <p className="font-dm text-sm font-semibold text-white leading-relaxed">
                  Road No. 36, CBI Colony
                  <br />
                  Jubilee Hills, Hyderabad
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20" />

            <a
              href="tel:+918919296510"
              className="flex items-center justify-center gap-2 font-dm text-sm font-semibold py-3 bg-white/15 hover:bg-white/25 rounded-sm transition-colors duration-200 text-white"
            >
              <Phone size={14} />
              Call to Reserve
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
