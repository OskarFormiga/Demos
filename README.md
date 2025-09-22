# React Native Expo con Tailwind CSS y Navegación por Pestañas

Este es un proyecto de React Native creado con Expo, que incluye integración con Tailwind CSS usando NativeWind y navegación básica por pestañas con 3 pantallas.

## Características

- 🚀 **Expo**: Desarrollo rápido con Expo SDK
- 🎨 **Tailwind CSS**: Estilos utilitarios con NativeWind
- 📱 **Navegación**: Bottom tab navigator con 3 pestañas (Home, Profile, Settings)
- 🎯 **TypeScript**: Soporte completo de tipos
- 📱 **Multiplataforma**: Compatible con iOS, Android y Web
- 🎨 **UI Moderna**: Interfaz con colores distintivos por pestaña

## Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app en tu dispositivo móvil (para testing)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd demos
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npx expo start
   ```

4. Escanea el código QR con:
   - **Expo Go** en Android/iOS
   - **Cámara** en iOS
   - Presiona `w` para web

## Uso

### Comandos disponibles

- `npm start` o `npx expo start`: Inicia el servidor de desarrollo
- `npm run android`: Ejecuta en Android
- `npm run ios`: Ejecuta en iOS (requiere macOS)
- `npm run web`: Ejecuta en navegador web

### Navegación

La app incluye 3 pestañas principales:
- **Home**: Pantalla de inicio con fondo azul
- **Profile**: Pantalla de perfil con fondo verde
- **Settings**: Pantalla de configuración con fondo rojo

Cada pestaña tiene iconos de Ionicons y contenido de ejemplo.

## Estructura del Proyecto

```
demos/
├── src/
│   └── screens/
│       ├── Home.tsx       # Pantalla de inicio
│       ├── Profile.tsx    # Pantalla de perfil
│       └── Settings.tsx   # Pantalla de configuración
├── assets/                # Recursos estáticos
├── global.css            # Estilos Tailwind CSS
├── App.tsx               # Componente principal con navegación
├── index.ts              # Punto de entrada
├── tailwind.config.js    # Configuración de Tailwind
├── metro.config.js       # Configuración de Metro
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias
└── README.md             # Este archivo
```

## Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma para React Native
- **NativeWind**: Tailwind CSS para React Native
- **React Navigation**: Navegación entre pantallas
- **TypeScript**: Tipado estático
- **Ionicons**: Iconos para la interfaz

## Configuración de Tailwind CSS

El proyecto usa NativeWind v4 con configuración CSS-based:

- `global.css`: Contiene las directivas @tailwind
- `tailwind.config.js`: Configuración con preset de NativeWind
- `metro.config.js`: Configuración de Metro para procesar CSS

## Desarrollo

### Agregar nuevas pantallas

1. Crea un nuevo archivo en `src/screens/`
2. Importa en `App.tsx`
3. Agrega la ruta al `Tab.Navigator`

### Personalizar estilos

Usa clases de Tailwind directamente en los componentes:

```tsx
<View className="flex-1 justify-center items-center bg-blue-500">
  <Text className="text-white text-xl font-bold">Hola Mundo</Text>
</View>
```

## Solución de Problemas

### Errores comunes

1. **Node version**: Asegúrate de usar Node.js 18+
2. **Dependencias**: Ejecuta `npm install` después de clonar
3. **Cache**: Limpia el cache con `npx expo start --clear`
4. **Expo Go**: Actualiza la app si hay problemas de conexión

### Reset completo

```bash
rm -rf node_modules package-lock.json
npm install
npx expo start --clear
```

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Soporte

Si encuentras problemas:
- Revisa los issues del repositorio
- Consulta la documentación de Expo y NativeWind
- Abre un nuevo issue con detalles del error

¡Disfruta desarrollando con React Native y Tailwind CSS! 🎉