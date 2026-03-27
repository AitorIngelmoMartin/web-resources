# AquaNova - Sitio Web Profesional de Depuración de Piscinas

## 📋 Descripción
Sitio web moderno y responsive para AquaNova, empresa especializada en depuración, mantenimiento y tratamiento de piscinas en España. Diseñado con capacidad de contacto por WhatsApp 24/7.

## 📁 Estructura de Archivos
```
piscinas/
├── index.html       # Página principal con todas las secciones
├── styles.css       # Estilos CSS responsivos
├── script.js        # JavaScript para interactividad
└── README.md        # Este archivo
```

## 🚀 Características

✅ **Navegación Intuitiva**
- Menú fijo con acceso rápido a todas las secciones
- Botón de WhatsApp flotante en la barra de navegación

✅ **Secciones Principales**
- **HOME**: Hero section atractivo con CTA
- **SERVICES**: Grid de 6 servicios profesionales
- **ABOUT**: Información de la empresa con estadísticas
- **CONTACT**: Formulario de contacto + Información de ubicación

✅ **Integración WhatsApp**
- Contacto 24/7 por WhatsApp
- Múltiples puntos de acceso (botón navegación, CTA principal, formulario, banner especial)
- Mensajes pre-cargados y personalizables

✅ **Diseño Responsive**
- Compatible con desktop, tablet y móvil
- Optimizado para todos los tamaños de pantalla
- Animaciones suaves y profesionales

✅ **Performance**
- Carga rápida
- Sin dependencias externas
- CSS y JavaScript optimizados

## 🔧 Personalización

### 1. **Cambiar el Número de WhatsApp**
Edita el archivo `script.js` y busca:
```javascript
const WHATSAPP_NUMBER = '34600123456'; // Reemplaza con tu número
```

**Formato:** El número debe estar en formato internacional sin `+` ni espacios.
- España: `34600123456` → +34 600 123 456

### 2. **Cambiar Información de Contacto**
En `index.html`, busca la sección `#contact` y actualiza:
```html
<p>+34 600 123 456</p>
<p>info@aquanova.es</p>
```

### 3. **Personalizar Mensaje de WhatsApp**
En `script.js`, modifica:
```javascript
const message = encodeURIComponent('Tu mensaje personalizado aquí');
```

### 4. **Cambiar Colores de Marca**
En `styles.css`, busca y reemplaza el color primario:
```css
/* Cambiar #0099cc por tu color corporativo */
color: #0099cc;
background: linear-gradient(135deg, #0099cc 0%, #0077aa 100%);
```

## 📱 Cómo Usar

### Opción 1: Abrir localmente en el navegador
1. Abre el archivo `index.html` en tu navegador preferido
2. O sirve los archivos con un servidor local:
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (con http-server)
npx http-server
```

### Opción 2: Subir a un servidor web
1. Sube los tres archivos (index.html, styles.css, script.js) a tu hosting
2. Asegúrate de que estén en el mismo directorio
3. Accede a través de tu dominio

## 📊 Secciones Detalladas

### HOME
- Héroe visual con animación
- Botón CTA para contacto rápido
- Descripción clara del servicio

### SERVICES
6 servicios principales:
1. Depuración de Agua
2. Limpieza Profunda
3. Tratamiento Químico
4. Mantenimiento Mensual
5. Reparación de Equipos
6. Climatización

### ABOUT
- Descripción profesional de AquaNova
- 4 características clave
- Estadísticas impactantes:
  - 500+ piscinas mantenidas
  - 15+ años de experiencia
  - 99% de satisfacción

### CONTACT
- Información de ubicación
- Disponibilidad 24/7
- Formulario de contacto
- Banner promocional de WhatsApp
- Información de email

## 🎨 Estilos y Colores

**Paleta de Colores Corporativa:**
- Azul Primario: `#0099cc`
- Azul Oscuro: `#0077aa`
- Verde WhatsApp: `#25D366`
- Gris Claro: `#f5f7fa`
- Gris Oscuro: `#222`

## 📝 Formulario de Contacto

El formulario está configurado para:
1. Recopilar nombre, email, teléfono y consulta
2. Enviar directamente por WhatsApp
3. Pre-llenar con la información del usuario

## 🌐 SEO Básico

- Título optimizado
- Meta viewport para responsive
- Estructura HTML semántica
- Headings jerárquicos

## 🔒 Privacidad

- No se recopilan datos en servidor
- Todo se envía a través de WhatsApp
- Cumple con RGPD (no hay almacenamiento de datos)

## 📞 Soporte Técnico

Para integración de emails adicionales o funcionalidades avanzadas, considera:
- Agregar un backend Node.js/PHP
- Integrar un servicio de emails (SendGrid, Mailgun)
- Implementar base de datos para leads

## 🚀 Mejoras Futuras Sugeridas

1. Añadir galería de proyectos completados
2. Integrar Google Maps para ubicación
3. Sistema de reservas de citas
4. Blog con consejos de mantenimiento
5. Certificados y testimonios de clientes
6. Carrito de compra para productos

## 📄 Licencia

Este proyecto es de uso libre para AquaNova.

---

**Última actualización:** Marzo 2026
**Versión:** 1.0
