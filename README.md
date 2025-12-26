# Kawaii Friend Simulator 🐱

A virtual companion app built with Expo, React Native, TypeScript, NativeWind, and Firebase.

## 🚀 Features

- **Authentication**: Email/Password login via Firebase.
- **Virtual Friend**: Adopt a friend ("Momo") who gets hungry, thirsty, or bored.
- **Interactions**: Feed, Play, and Rest to keep your friend happy.
- **Real-time State**: Friend's state is synced across devices using Firestore.
- **Notifications**: "Missed You" reminders (local demo).

## 🛠 Tech Stack

- **Framework**: Expo (Managed)
- **UI**: React Native + NativeWind (Tailwind CSS)
- **Backend**: Firebase Auth & Firestore
- **State Management**: React Context + Firestore (Remote State)

## 📦 Setup & Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase**
   - Create a project at [console.firebase.google.com](https://console.firebase.google.com/)
   - Enable **Authentication** (Email/Password)
   - Enable **Firestore Database** (Create 'users' collection rule if needed)
   - Copy your web config keys
   - Open `src/services/firebase.ts` and replace the placeholder config.

3. **Run the App**
   ```bash
   npx expo start
   ```
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go

## 📱 Teacher Notes (Etüt için)

- **Architecture**: `src/` folder separates Logic (`services`), UI (`screens`), and State (`context`).
- **State Flow**: User interacts -> updates Firestore -> `onSnapshot` updates UI.
- **Styling**: `className` prop from NativeWind makes styling strictly declarative.

Enjoy your Kawaii Friend! ✨
