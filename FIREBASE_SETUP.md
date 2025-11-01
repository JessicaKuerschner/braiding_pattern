# Firebase Setup Instructions

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "braiding-pattern-generator")
4. Click "Continue"
5. Disable Google Analytics (optional)
6. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project, click the Web icon (</>) to add Firebase to your web app
2. Enter an app nickname (e.g., "Pattern Generator Web")
3. Do NOT check "Firebase Hosting" (we'll deploy separately)
4. Click "Register app"

## Step 3: Get Your Configuration

You'll see a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

**Copy all these values!**

## Step 4: Enable Realtime Database

1. In the left sidebar, click "Build" → "Realtime Database"
2. Click "Create Database"
3. Choose a location (e.g., "us-central1" or closest to you)
4. For security rules, select **"Start in test mode"** (we'll update later)
5. Click "Enable"

## Step 5: Update index.html

Open `index.html` and find this section near the top (around line 13-24):

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

**Replace all the placeholder values** with your actual values from Step 3.

## Step 6: Test Locally

1. Open `index.html` in a web browser (or use a local server)
2. Open the browser console (F12)
3. You should see "DOM loaded, initializing..." with no Firebase errors
4. Open the same page in another browser/tab - the online count should update!

## Step 7: Update Security Rules (Important!)

Before deploying publicly, update your Firebase security rules:

1. Go to Firebase Console → Realtime Database → Rules
2. Replace the rules with:

```json
{
  "rules": {
    "presence": {
      ".read": true,
      "$uid": {
        ".write": true
      }
    },
    "sharedVariables": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Click "Publish"

## Step 8: Deploy Your Website

### Option A: GitHub Pages (Recommended)

1. Create a GitHub repository
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option B: Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be live instantly!

### Option C: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Initialize hosting:
   ```bash
   firebase init hosting
   ```
4. Deploy:
   ```bash
   firebase deploy
   ```

## Testing Real-time Features

Once deployed, test these features:

1. **Online User Count**: Open your site in multiple browsers/devices - the "X digital makers online" count should update
2. **Speed Nudge Sync**: Change the speed slider on one device - it should update on all other devices
3. **Color Sync**: Select a color on one device - pattern should update everywhere
4. **Needle Sync**: Click different needle configurations - they should sync across all users
5. **Pattern Updates**: All changes should regenerate the pattern in real-time on all devices

## Troubleshooting

### "Firebase is not defined" error
- Make sure the Firebase scripts are loading before your code
- Check your internet connection
- Verify the script URLs are correct

### Online count not updating
- Check Firebase Console → Realtime Database - you should see a "presence" node
- Make sure database rules allow read/write
- Check browser console for errors

### Variables not syncing
- Verify your Firebase configuration is correct
- Check that "sharedVariables" node appears in the database
- Ensure you're using the same Firebase project across all devices

### Permission denied errors
- Update security rules in Firebase Console
- Make sure both "presence" and "sharedVariables" have read/write permissions

## Need Help?

- Firebase Documentation: https://firebase.google.com/docs/database
- Firebase Console: https://console.firebase.google.com/
