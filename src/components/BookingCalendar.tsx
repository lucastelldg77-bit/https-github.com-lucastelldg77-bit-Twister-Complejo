import React, { useState } from "react";
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isToday,
  isBefore,
  startOfToday
} from "date-fns";
import { es } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const onDateClick = (day: Date) => {
    if (isBefore(day, startOfToday())) return;
    setSelectedDate(day);
    setStep(2);
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-8 px-2">
        <h3 className="text-2xl font-bold capitalize">
          {format(currentDate, "MMMM yyyy", { locale: es })}
        </h3>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white border border-white/5">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white border border-white/5">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    return (
      <div className="grid grid-cols-7 mb-4">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    const allDays = eachDayOfInterval({ start: startDate, end: endDate });

    return (
      <div className="grid grid-cols-7 gap-1">
        {allDays.map((d, i) => {
          const isSelected = selectedDate && isSameDay(d, selectedDate);
          const isCurMonth = isSameMonth(d, monthStart);
          const isPast = isBefore(d, startOfToday());
          const isCurrentDay = isToday(d);

          return (
            <button
              key={i}
              onClick={() => onDateClick(d)}
              disabled={isPast || !isCurMonth}
              className={`
                aspect-square p-2 rounded-xl flex flex-col items-center justify-center transition-all relative
                ${!isCurMonth ? "opacity-0 pointer-events-none" : ""}
                ${isPast ? "text-slate-700 cursor-not-allowed" : "hover:bg-accent-blue/20 text-slate-300"}
                ${isSelected ? "!bg-accent-blue !text-white shadow-lg shadow-accent-blue/20" : ""}
                ${isCurrentDay && !isSelected ? "border border-accent-blue/30 text-accent-blue" : ""}
              `}
            >
              <span className="text-sm font-bold">{format(d, "d")}</span>
              {isSelected && <motion.div layoutId="activeDay" className="absolute inset-0 border-2 border-white rounded-xl" />}
            </button>
          );
        })}
      </div>
    );
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: selectedDate ? format(selectedDate, "dd/MM/yyyy") : "",
      time: selectedTime
    };
    
    // WhatsApp fallback for booking
    const text = `Hola Twister! 👋\n\nQuiero agendar una reunión:\n👤 Nombre: ${data.name}\n📧 Email: ${data.email}\n📅 Fecha: ${data.date}\n⏰ Hora: ${data.time}\n💬 Motivo: ${data.message}`;
    window.open(`https://wa.me/5493814181238?text=${encodeURIComponent(text)}`, "_blank");
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-[3rem] border border-glass-border shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Info */}
          <div className="md:w-1/3">
            <span className="badge px-4 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue rounded-full text-xs font-bold mb-6">RESERVA TU LUGAR</span>
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight uppercase">Agenda tu <br/><span className="text-gradient">Visita</span></h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              ¿Quieres conocer el complejo o planificar tu evento? Elige una fecha y conversémoslo personalmente.
            </p>
            
            <div className="space-y-4">
              <div className={`flex items-center gap-3 p-4 rounded-xl transition-all border ${step >= 1 ? "border-accent-blue bg-accent-blue/5 text-white" : "border-white/5 text-slate-500"}`}>
                <CalendarIcon className="w-5 h-5" />
                <span className="font-bold text-sm">1. Elige Fecha</span>
              </div>
              <div className={`flex items-center gap-3 p-4 rounded-xl transition-all border ${step >= 2 ? "border-accent-blue bg-accent-blue/5 text-white" : "border-white/5 text-slate-500"}`}>
                <Clock className="w-5 h-5" />
                <span className="font-bold text-sm">2. Elige Hora</span>
              </div>
              <div className={`flex items-center gap-3 p-4 rounded-xl transition-all border ${step >= 3 ? "border-accent-blue bg-accent-blue/5 text-white" : "border-white/5 text-slate-500"}`}>
                <User className="w-5 h-5" />
                <span className="font-bold text-sm">3. Tus Datos</span>
              </div>
            </div>
          </div>

          {/* Right: Interaction */}
          <div className="md:w-2/3 bg-white/5 rounded-3xl p-6 border border-white/5 backdrop-blur-sm min-h-[450px] flex flex-col">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key="step1"
                >
                  {renderHeader()}
                  {renderDays()}
                  {renderCells()}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key="step2"
                  className="flex flex-col h-full"
                >
                  <button onClick={() => setStep(1)} className="text-accent-blue text-sm font-bold mb-6 hover:underline flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> Volver al calendario
                  </button>
                  <h3 className="text-xl font-bold mb-6">Selecciona una hora para el {selectedDate && format(selectedDate, "dd 'de' MMMM", { locale: es })}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => { setSelectedTime(time); setStep(3); }}
                        className="py-4 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue hover:bg-accent-blue/10 transition-all font-bold text-lg"
                      >
                        {time} hs
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key="step3"
                >
                  <button onClick={() => setStep(2)} className="text-accent-blue text-sm font-bold mb-6 hover:underline flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> Volver a horarios
                  </button>
                  <h3 className="text-xl font-bold mb-6">Completa tus datos</h3>
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Nombre Completo</label>
                        <input required name="name" type="text" placeholder="Ej: Juan Pérez" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-blue transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">WhatsApp / Email</label>
                        <input required name="email" type="text" placeholder="Tu contacto" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-blue transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Mensaje o Motivo</label>
                      <textarea required name="message" rows={3} placeholder="Cuéntanos sobre tu interés..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-blue transition-colors resize-none"></textarea>
                    </div>
                    <div className="p-4 bg-accent-blue/10 rounded-2xl border border-accent-blue/20 mb-4">
                        <div className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-1">Resumen de Cita</div>
                        <div className="text-sm font-medium text-white">
                          📅 {selectedDate && format(selectedDate, "EEEE d 'de' MMMM", { locale: es })} <br/>
                          ⏰ {selectedTime} hs
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-white text-[#0f172a] py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl">
                      Confirmar y Enviar Reserva
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
}
