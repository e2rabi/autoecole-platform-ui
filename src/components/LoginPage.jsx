import { useState } from "react";

const DEFAULT_CLIENT_ID = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
const DEFAULT_CLIENT_SECRET = import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET;
const KEYCLOAK_TOKEN_URL = import.meta.env.VITE_KEYCLOAK_TOKEN_URL;

export default function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!KEYCLOAK_TOKEN_URL) {
      setError(
        "La configuration Keycloak n'est pas définie. Vérifiez votre fichier .env.",
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(KEYCLOAK_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "password",
          client_id: DEFAULT_CLIENT_ID,
          client_secret: DEFAULT_CLIENT_SECRET,
          username: formData.username,
          password: formData.password,
        }).toString(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error_description || data.error || "Échec de la connexion.",
        );
      }

      onLogin?.(data);
    } catch (err) {
      setError(err.message || "Impossible de se connecter pour le moment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="login-panel login-form-panel">
          <div className="brand-block">
            <div className="brand-mark">A</div>
            <div>
              <div className="brand-name">Auto École</div>
              <div className="brand-sub">Gestion moderne</div>
            </div>
          </div>

          <h1>Bienvenue</h1>
          <p>
            Connectez-vous pour accéder à votre tableau de bord et gérer vos
            leçons.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Nom d&apos;utilisateur</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nom d'utilisateur"
                autoComplete="username"
                required
              />
            </label>

            <label className="field">
              <span>Mot de passe</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                autoComplete="current-password"
                required
              />
            </label>

            {error ? <div className="login-error">{error}</div> : null}

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>
        </div>

        <div
          className="login-panel login-illustration-panel"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
