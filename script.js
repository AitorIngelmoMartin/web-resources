// Número de WhatsApp (Reemplaza con el número real)
const WHATSAPP_NUMBER = '34600123456'; // Sin + ni espacios

// Función para abrir WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent('Hola AquaNova, me gustaría conocer más sobre vuestros servicios de depuración de piscinas.');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manejo del formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(this);
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const telefono = this.querySelector('input[type="tel"]').value;
        const consulta = this.querySelector('textarea').value;
        
        // Crear mensaje para WhatsApp
        const mensaje = `Hola AquaNova,%0A%0AMi nombre es ${nombre}%0ATeléfono: ${telefono}%0AEmail: ${email}%0A%0AConsulta: ${consulta}`;
        
        // Enviar por WhatsApp
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
        window.open(whatsappUrl, '_blank');
        
        // Mostrar confirmación
        alert('Redirigiendo a WhatsApp...');
        this.reset();
    });
}

// Animación de scroll para navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Animación de observación para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador a las tarjetas de servicio
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Detección automática del número de WhatsApp desde el HTML
window.addEventListener('load', function() {
    // Esta función se ejecuta cuando la página se carga completamente
    console.log('AquaNova - Sitio web cargado exitosamente');
});
