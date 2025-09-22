# React Native Expo con Tailwind CSS y Navegación por Pestañas

Este es un proyecto de React Native creado con Expo, que incluye integración con Tailwind CSS usando NativeWind y navegación básica por pestañas con 3 pantallas.

![React Native](https://img.shields.io/badge/React%20Native-0.81.4-blue?style=flat&logo=react)
![Expo](https://img.shields.io/badge/Expo-~54.0.9-black?style=flat&logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.9.2-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4.17-38B2AC?style=flat&logo=tailwind-css)

## Características

- 🚀 **Expo**: Desarrollo rápido con Expo SDK
- 🎨 **Tailwind CSS**: Estilos utilitarios con NativeWind v4
- 📱 **Navegación**: Bottom tab navigator con 3 pestañas (Home, Profile, Settings)
- 🎯 **TypeScript**: Soporte completo de tipos
- 📱 **Multiplataforma**: Compatible con iOS, Android y Web
- 🎨 **UI Moderna**: Interfaz con colores distintivos por pestaña
- 🌟 **Iconos**: Interfaz con Ionicons integrados

## Prerrequisitos

Antes de empezar, asegúrate de tener instalado:

### Herramientas de Desarrollo
- **Visual Studio Code**: [Descargar aquí](https://code.visualstudio.com/)
- **Node.js** (versión 18 o superior): [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **Git**: [Descargar aquí](https://git-scm.com/)

### Para Testing en Dispositivos
- **Expo Go app** en tu dispositivo móvil:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Extensiones Recomendadas para VS Code
- ES7+ React/Redux/React-Native snippets
- React Native Tools
- Tailwind CSS IntelliSense
- TypeScript Importer

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/OskarFormiga/Demos.git
cd Demos
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Instalar Expo CLI globalmente (opcional pero recomendado)
```bash
npm install -g @expo/cli
```

### 4. Iniciar el proyecto
```bash
npm start
# o alternativamente
npx expo start
```

### 5. Abrir en dispositivo/emulador
- Escanea el código QR con **Expo Go** (Android/iOS)
- Escanea con la **app Cámara** (iOS)
- Presiona `w` para abrir en navegador web
- Presiona `a` para Android emulator
- Presiona `i` para iOS simulator (solo macOS)

## Uso

### Comandos disponibles

- `npm start` o `npx expo start`: Inicia el servidor de desarrollo
- `npm run android`: Ejecuta en Android emulator
- `npm run ios`: Ejecuta en iOS simulator (requiere macOS)
- `npm run web`: Ejecuta en navegador web

### Navegación

La app incluye 3 pestañas principales:
- **🏠 Home**: Pantalla de inicio con fondo azul
- **👤 Profile**: Pantalla de perfil con fondo verde  
- **⚙️ Settings**: Pantalla de configuración con fondo rojo

Cada pestaña tiene iconos de Ionicons y contenido de ejemplo estilizado con Tailwind CSS.

## Vista Previa

```
┌─────────────────────────────────┐
│        React Native App         │
├─────────────────────────────────┤
│                                 │
│     Contenido de la pestaña     │
│      con estilos Tailwind       │
│                                 │
├─────────────────────────────────┤
│  🏠 Home  👤 Profile  ⚙️ Settings │
└─────────────────────────────────┘
```

## Estructura del Proyecto

```
Demos/
├── 📁 src/
│   └── 📁 screens/
│       ├── 📄 Home.tsx        # Pantalla de inicio
│       ├── 📄 Profile.tsx     # Pantalla de perfil
│       └── 📄 Settings.tsx    # Pantalla de configuración
├── 📁 assets/                 # Recursos estáticos (imágenes, fuentes)
├── 📄 global.css             # Estilos Tailwind CSS
├── 📄 App.tsx                # Componente principal con navegación
├── 📄 index.ts               # Punto de entrada de la aplicación
├── 📄 tailwind.config.js     # Configuración de Tailwind CSS
├── 📄 metro.config.js        # Configuración de Metro bundler
├── 📄 tsconfig.json          # Configuración de TypeScript
├── 📄 package.json           # Dependencias y scripts
├── 📄 app.json               # Configuración de Expo
└── 📄 README.md              # Este archivo
```

## Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| [React Native](https://reactnative.dev/) | 0.81.4 | Framework para desarrollo móvil |
| [Expo](https://expo.dev/) | ~54.0.9 | Plataforma para React Native |
| [NativeWind](https://www.nativewind.dev/) | 4.2.1 | Tailwind CSS para React Native |
| [React Navigation](https://reactnavigation.org/) | 7.x | Navegación entre pantallas |
| [TypeScript](https://www.typescriptlang.org/) | ~5.9.2 | Tipado estático para JavaScript |
| [Ionicons](https://ionic.io/ionicons) | 15.x | Biblioteca de iconos |

## Configuración de Tailwind CSS

El proyecto utiliza **NativeWind v4** con configuración CSS-based para mejor rendimiento:

### Archivos de configuración:
- `global.css`: Contiene las directivas `@tailwind` base
- `tailwind.config.js`: Configuración personalizada con preset de NativeWind
- `metro.config.js`: Configuración de Metro para procesar archivos CSS
- `tsconfig.json`: Tipos de NativeWind para autocompletado en VS Code

## Desarrollo

### Abrir el proyecto en VS Code
```bash
# Abre VS Code en la carpeta del proyecto
code .
```

### Agregar nuevas pantallas

1. Crea un nuevo archivo en `src/screens/`:
   ```tsx
   // src/screens/NewScreen.tsx
   import React from 'react';
   import { View, Text } from 'react-native';

   export default function NewScreen() {
     return (
       <View className="flex-1 justify-center items-center bg-purple-100">
         <Text className="text-2xl font-bold text-purple-800">Nueva Pantalla</Text>
       </View>
     );
   }
   ```

2. Importa en `App.tsx`:
   ```tsx
   import NewScreen from './src/screens/NewScreen';
   ```

3. Agrega la ruta al `Tab.Navigator`:
   ```tsx
   <Tab.Screen name="NewScreen" component={NewScreen} />
   ```

### Personalizar estilos con Tailwind

Utiliza clases de Tailwind directamente en los componentes:

```tsx
<View className="flex-1 justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
  <Text className="text-white text-xl font-bold mb-4">Hola Mundo</Text>
  <Text className="text-gray-200 text-center px-4">
    ¡Bienvenido a React Native con Tailwind CSS!
  </Text>
</View>
```

### Clases Tailwind más utilizadas en React Native:
- **Layout**: `flex-1`, `justify-center`, `items-center`
- **Spacing**: `p-4`, `m-2`, `px-6`, `py-3`
- **Colors**: `bg-blue-500`, `text-white`, `text-gray-600`
- **Typography**: `text-lg`, `font-bold`, `text-center`

## Solución de Problemas

### Errores comunes y soluciones

#### 1. Error de versión de Node.js
```bash
# Verificar versión de Node.js
node --version
# Debe ser 18.x o superior
```

#### 2. Problemas con dependencias
```bash
# Limpiar cache de npm
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

#### 3. Error en Metro bundler
```bash
# Limpiar cache de Expo
npx expo start --clear

# o limpiar cache de Metro
npx react-native start --reset-cache
```

#### 4. Problemas con Expo Go
- Asegúrate de que tu dispositivo y computadora están en la misma red WiFi
- Actualiza la app Expo Go a la última versión
- Reinicia el servidor de desarrollo

#### 5. Tailwind CSS no funciona
- Verifica que `global.css` esté importado
- Revisa la configuración en `metro.config.js`
- Reinicia el servidor después de cambios en configuración

### Reset completo del proyecto
```bash
# Eliminar todo y reinstalar
rm -rf node_modules package-lock.json .expo
npm install
npx expo start --clear
```

## Scripts NPM Disponibles

```bash
npm start          # Inicia Expo development server
npm run android    # Ejecuta en Android emulator
npm run ios        # Ejecuta en iOS simulator (solo macOS)
npm run web        # Ejecuta en navegador web
npm install        # Instala todas las dependencias
```

## Contribución

¡Las contribuciones son bienvenidas! Por favor sigue estos pasos:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios:
   ```bash
   git commit -am 'Agrega nueva funcionalidad'
   ```
4. **Push** a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request** en GitHub

### Convenciones de código
- Utiliza TypeScript para todos los componentes nuevos
- Sigue las convenciones de naming de React Native
- Usa Tailwind CSS para estilos (evita StyleSheet)
- Agrega comentarios descriptivos en código complejo

## Recursos Útiles

### Documentación oficial
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tutoriales y guías
- [Expo + NativeWind Setup Guide](https://www.nativewind.dev/quick-starts/expo)
- [React Navigation Tutorial](https://reactnavigation.org/docs/tab-based-navigation)
- [TypeScript with React Native](https://reactnative.dev/docs/typescript)

## Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Soporte

Si encuentras problemas o tienes preguntas:

1. **Revisa los issues existentes**: [GitHub Issues](https://github.com/OskarFormiga/Demos/issues)
2. **Crea un nuevo issue** con:
   - Descripción detallada del problema
   - Pasos para reproducir el error
   - Capturas de pantalla (si aplica)
   - Información de tu entorno (OS, Node.js version, etc.)
3. **Consulta la documentación** de las tecnologías utilizadas
4. **Stack Overflow** con tags: `react-native`, `expo`, `nativewind`

---

**Desarrollado con ❤️ usando React Native + Expo + Tailwind CSS**

¡Disfruta desarrollando aplicaciones móviles modernas! 🚀📱