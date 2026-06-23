# Alejandro Rosales - Portfolio Moderno

Portfolio personal renovado con tecnologías modernas: React, Vite, Tailwind CSS y Framer Motion.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca JavaScript para construir interfaces de usuario
- **Vite** - Build tool rápido y moderno
- **Tailwind CSS** - Framework de CSS utilitario para estilizado
- **Framer Motion** - Biblioteca de animaciones para React
- **Lucide React** - Biblioteca de iconos modernos

## ✨ Características del Diseño

- **Glassmorphism** - Efectos de vidrio esmerilado en todos los componentes
- **Animaciones fluidas** - Transiciones suaves con Framer Motion
- **Background animado** - Blobs de color flotantes con gradientes
- **Responsive design** - Optimizado para móvil y desktop
- **Paleta moderna** - Colores púrpura/índigo con gradientes
- **Tipografía premium** - Space Grotesk + Inter

## 📦 Instalación

1. Navega al directorio del proyecto:
```bash
cd new-page
```

2. Instala las dependencias:
```bash
npm install
```

O ejecuta el archivo `install.bat` si estás en Windows.

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea una versión de producción
- `npm run preview` - Previsualiza la versión de producción

## 🎨 Estructura del Proyecto

```
new-page/
├── public/              # Assets estáticos (imágenes)
├── src/
│   ├── components/      # Componentes React
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML principal
├── package.json         # Dependencias
├── tailwind.config.js   # Configuración de Tailwind
└── vite.config.js       # Configuración de Vite
```

## 🌟 Secciones

1. **Hero** - Presentación con foto de perfil y animaciones de glow
2. **About** - Información personal con cards de experiencia y educación
3. **Experience** - Habilidades organizadas por categorías con barras de progreso
4. **Contact** - Información de contacto y CTA
5. **Footer** - Navegación y redes sociales

## 🎯 Personalización

### Cambiar Colores
Edita `tailwind.config.js` para modificar la paleta de colores:
```js
colors: {
  primary: '#6366f1',    // Color principal
  secondary: '#8b5cf6',  // Color secundario
  accent: '#a855f7',     // Color de acento
  dark: '#0a0a0f',       // Fondo oscuro
}
```

### Cambiar Contenido
Cada componente está en `src/components/`. Modifica el texto, enlaces y datos según necesites.

### Agregar Nuevas Imágenes
Coloca las imágenes en la carpeta `public/` y referencia con `/nombre-archivo.ext`

## 📱 Responsive

El diseño es completamente responsive y se adapta a:
- Móvil (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Solución de Problemas

### Los estilos de Tailwind no funcionan
Asegúrate de haber instalado las dependencias:
```bash
npm install
```

### Las imágenes no cargan
Verifica que las imágenes estén en la carpeta `public/` y que los paths sean correctos.

## 📄 Licencia

Copyright © 2024 Alejandro Rosales. Todos los derechos reservados.
