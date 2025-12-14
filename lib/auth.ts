export const ADMIN_NAME = "Bolla Venkatesh";

// Storing password as Base64 to avoid plain text in source code.
// "Bollven25" encoded is "Qm9sbHZlbjI1"
const ENCODED_PASS = "Qm9sbHZlbjI1";

export const checkPassword = (input: string): boolean => {
  try {
    return btoa(input) === ENCODED_PASS;
  } catch (e) {
    return false;
  }
};

export const isAuthenticated = (): boolean => {
    return localStorage.getItem("bollaar_admin_auth") === "true";
}

export const login = () => {
    localStorage.setItem("bollaar_admin_auth", "true");
}

export const logout = () => {
    localStorage.removeItem("bollaar_admin_auth");
    window.location.href = "#/admin/login";
}