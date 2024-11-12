function Greetings({ lang, children }) {
  let languages = {
    es: "Hola",
    de: "Hallo",
    en: "Hello",
  };

  return (
    <>
      <p lang={lang}>{languages[lang] + " " + children}</p>
    </>
  );
}
export default Greetings;
