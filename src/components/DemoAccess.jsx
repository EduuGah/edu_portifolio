import { useState } from "react";
import { Check, Copy, KeyRound } from "lucide-react";

function CopyValue({ value, label }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // Sem permissão de área de transferência: o valor continua visível para digitar.
    }
  };

  return (
    <button type="button" className={`copy-value${copied ? " is-copied" : ""}`} onClick={copy} aria-label={`Copiar ${label}: ${value}`}>
      <span>{value}</span>
      {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
    </button>
  );
}

export function DemoAccess({ accounts }) {
  return (
    <div className="demo-access">
      <p className="demo-access-title"><KeyRound size={15} aria-hidden="true" /> Teste sem criar conta</p>
      <table>
        <thead>
          <tr><th scope="col">Perfil</th><th scope="col">Usuário</th><th scope="col">Senha</th></tr>
        </thead>
        <tbody>
          {accounts.map((a) => (
            <tr key={a.user}>
              <th scope="row">{a.role}</th>
              <td><CopyValue value={a.user} label="usuário" /></td>
              <td><CopyValue value={a.password} label="senha" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
