import { useEffect, useState } from 'react';

export default function LangSelection({ changeLang }) {
  const [lang, setLang] = useState('ua');

  const handleChangeLang = e => {
    setLang(e.target.value);
  };

  useEffect(() => {
    changeLang(lang);
  }, [lang]);

  return (
    <form>
      <select name="lang" onChange={handleChangeLang}>
        <option value="ua">UA</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </form>
  );
}
