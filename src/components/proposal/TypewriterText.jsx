import { useEffect, useMemo, useState } from "react";

const phrasesByLanguage = {
  pt: [
    "ESPERADA DO ANO",
    "FEITA PARA NEGÓCIOS",
    "QUE CONECTA MARCAS",
    "ONDE SUA MARCA CRESCE",
  ],
  es: [
    "ESPERADA DEL AÑO",
    "HECHA PARA NEGOCIOS",
    "QUE CONECTA MARCAS",
    "DONDE SU MARCA CRECE",
  ],
};

export default function TypewriterText({ language = "pt" }) {
  const phrases = useMemo(() => phrasesByLanguage[language] || phrasesByLanguage.pt, [language]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setText(phrases[0]);
      return undefined;
    }

    const phrase = phrases[phraseIndex];
    const finishedTyping = !deleting && text === phrase;
    const finishedDeleting = deleting && text.length === 0;
    const delay = finishedTyping ? 1500 : finishedDeleting ? 280 : deleting ? 34 : 62;

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
        return;
      }
      if (finishedDeleting) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }
      setText(deleting ? phrase.slice(0, Math.max(0, text.length - 1)) : phrase.slice(0, text.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, phrases, text]);

  useEffect(() => {
    setPhraseIndex(0);
    setDeleting(false);
    setText(phrases[0]);
  }, [phrases]);

  return (
    <span className="typewriter-line text-coral" aria-label={phrases[phraseIndex]}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="typewriter-caret">|</span>
    </span>
  );
}
