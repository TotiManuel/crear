import React from 'react';

const FooterComponent = () => {
  return (
    <footer id="footer" className="footer">
        <div id="footerContent" className="footer-content">
            <p id="footerText" className="footer-text">&copy; 2025 Crear. Todos los derechos reservados.</p>
            <ul id="footerLinks" className="footer-links">
                <li id="privacyPolicyLink" className="footer-link-item"><a href="#" id="privacyPolicyAnchor">Política de privacidad</a></li>
                <li id="termsOfServiceLink" className="footer-link-item"><a href="#" id="termsOfServiceAnchor">Términos de servicio</a></li>
                <li id="contactLink" className="footer-link-item"><a href="#" id="contactAnchor">Contacto</a></li>
            </ul>
        </div>
    </footer>
  );
};

export default FooterComponent;
