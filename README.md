# 🌍 AI Travel Planner Demo

A beautiful, fully-functional AI travel planner demo that creates personalized itineraries. Perfect for tourism boards, travel agencies, and travel tech companies to showcase AI-powered travel planning capabilities.

![AI Travel Planner](https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop&auto=format)

## ✨ What This Demo Does

- **Personalized Trip Planning**: Users select their travel style and preferences
- **AI Processing Simulation**: Realistic AI processing animation with status updates
- **Beautiful Itineraries**: Day-by-day plans with activities, hotels, and restaurants
- **Booking Flow**: Complete booking simulation with confirmation
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile

## 🎯 Perfect For

- **Tourism Boards** (Singapore, Korea, Japan, etc.)
- **Travel Agencies** showcasing AI capabilities
- **Travel Tech Companies** demonstrating their platform
- **Investors** seeing AI travel planning in action

## 🚀 Quick Start (For Complete Beginners)

### Step 1: Download the Code
1. Click the green "Code" button at the top of this page
2. Click "Download ZIP"
3. Extract the ZIP file to your desktop
4. Rename the folder to something like "my-travel-demo"

### Step 2: Install Required Software
You need these free programs:

**Node.js** (JavaScript runtime):
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the "LTS" version (recommended)
3. Install it (just click through the installer)

**Cursor IDE** (Code editor):
1. Go to [cursor.com](https://cursor.com/)
2. Download and install Cursor
3. This is like Microsoft Word, but for code!

### Step 3: Open the Project
1. Open Cursor IDE
2. Click "File" → "Open Folder"
3. Select your "my-travel-demo" folder
4. You'll see all the project files on the left side

### Step 4: Install Dependencies
1. In Cursor, press `Ctrl+`` (or `Cmd+`` on Mac) to open the terminal
2. Type this command and press Enter:
   ```bash
   npm install
   ```
3. Wait for it to finish (you'll see lots of text scrolling)

### Step 5: Start the Demo
1. In the same terminal, type:
   ```bash
   npm start
   ```
2. Wait for "Compiled successfully!" message
3. Your browser will automatically open to `http://localhost:3000`
4. 🎉 Your demo is now running!

## 🎨 Customizing for Your Client

### Changing the Destination (Easy!)

Want to create a demo for Singapore Tourism Board instead of Tokyo? Here's how:

1. **Open the mock data file**:
   - In Cursor, find `src/data/mockData.ts` in the left panel
   - Double-click to open it

2. **Add your destination**:
   Find this section (around line 8):
   ```javascript
   export const destinations: Destination[] = [
     {
       id: 'singapore',
       name: 'Singapore',
       country: 'Singapore',
       image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop&auto=format',
       popular: true
     },
     // Add more destinations here...
   ]
   ```

3. **Find great images**:
   - Go to [unsplash.com](https://unsplash.com/)
   - Search for your destination (e.g., "Singapore skyline")
   - Right-click on an image → "Copy image address"
   - Paste the URL and add `?w=800&h=600&fit=crop&auto=format` at the end

### Adding Activities for Your Destination

1. **Find the activities section** (around line 140):
   ```javascript
   export const singaporeActivities: Activity[] = [
     {
       id: 'marina_bay_sands',
       name: 'Marina Bay Sands SkyPark',
       description: 'Breathtaking views from the iconic infinity pool area',
       image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&h=400&fit=crop&auto=format',
       category: 'city',
       tags: ['attractions', 'photography', 'luxury'],
       whyRecommended: 'Perfect for your love of iconic landmarks and city views',
       duration: '2 hours',
       cost: '$25',
       timeOfDay: 'afternoon',
       location: 'Marina Bay, Singapore',
       rating: 4.8
     }
   ]
   ```

2. **Customize each field**:
   - `name`: Activity name
   - `description`: What visitors will do
   - `image`: Photo URL from Unsplash
   - `tags`: Keywords that match user preferences
   - `whyRecommended`: Why this fits the traveler
   - `cost`: Price range
   - `timeOfDay`: 'morning', 'afternoon', or 'evening'

### Adding Hotels and Restaurants

Same process! Find these sections:
- `singaporeHotels` (around line 200)
- `singaporeRestaurants` (around line 230)

Copy the format and add your own data.

### Updating the Sample Itinerary

Find `sampleItinerary` (around line 280) and update:
```javascript
export const sampleItinerary: Itinerary = {
  destination: 'Singapore',
  startDate: '2024-04-15',
  endDate: '2024-04-19',
  personalization: 'Based on your love for modern architecture and street food',
  // ... rest of the itinerary
}
```

## 🔧 Using Cursor IDE Like a Pro

### Essential Cursor Features for Beginners

1. **File Explorer** (Left panel): Click on any file to open it
2. **Search Everything**: Press `Ctrl+P` (or `Cmd+P`) to quickly find files
3. **Auto-save**: Your changes save automatically!
4. **Terminal**: Press `Ctrl+`` to open/close the terminal
5. **AI Assistant**: Press `Ctrl+K` to ask Cursor's AI for help

### Making Changes

1. **Find what you want to change**: Use `Ctrl+F` to search within a file
2. **Edit carefully**: Change text, image URLs, or descriptions
3. **Save**: Files auto-save, but you can press `Ctrl+S` to be sure
4. **Test your changes**: The demo updates automatically in your browser

### If Something Breaks

1. **Check the terminal**: Look for red error messages
2. **Restart the demo**: 
   - Press `Ctrl+C` in terminal to stop
   - Type `npm start` to restart
3. **Ask Cursor AI**: Select the error text and press `Ctrl+K`, then ask "What's wrong with this code?"

## 🖼️ Finding Perfect Images

### Best Image Sources

1. **Unsplash** ([unsplash.com](https://unsplash.com/)):
   - Free, high-quality photos
   - Search: "Singapore skyline", "Korean food", "Tokyo temple"
   - Copy image address and add our format parameters

2. **Image URL Format**:
   Always end your image URLs with:
   ```
   ?w=600&h=400&fit=crop&auto=format
   ```
   This ensures fast loading and consistent sizing.

### Image Guidelines

- **Activities**: Use action shots or recognizable landmarks
- **Hotels**: Lobby, room, or exterior views
- **Restaurants**: Food photos or restaurant interiors
- **Destinations**: Iconic skylines or landmarks

## 📁 Project Structure (What Each Folder Does)

```
my-travel-demo/
├── src/
│   ├── components/          # Each screen of the demo
│   │   ├── LandingPage.tsx     # Welcome screen
│   │   ├── TripBasicsForm.tsx  # Destination and dates
│   │   ├── PreferencesForm.tsx # Travel style selection
│   │   ├── AIProcessingScreen.tsx # AI animation
│   │   ├── ItineraryScreen.tsx # Main results page
│   │   └── BookingConfirmation.tsx # Success page
│   ├── data/
│   │   └── mockData.ts      # ← EDIT THIS for your destinations!
│   ├── context/             # App state management
│   └── types/               # Data structure definitions
├── public/                  # Static files
└── package.json            # Project configuration
```

## 🌟 Common Customizations

### 1. Change the Company/Brand Name
In `public/index.html`, update:
```html
<title>Your Tourism Board - AI Travel Planner</title>
```

### 2. Update Colors
In `tailwind.config.js`, modify the color scheme:
```javascript
colors: {
  ocean: {
    500: '#your-primary-color',
    600: '#your-darker-shade',
  }
}
```

### 3. Add Your Logo
1. Add your logo image to the `public/` folder
2. In `src/components/LandingPage.tsx`, add your logo

### 4. Change the AI Processing Messages
In `src/components/AIProcessingScreen.tsx`, update the messages:
```javascript
const processingSteps = [
  {
    message: "Analyzing your preferences...",
    // ...
  },
  {
    message: "Finding the best spots in Singapore...",
    // ...
  }
]
```

## 🚨 Troubleshooting

### Common Issues

**"Module not found" errors**:
- Run `npm install` again
- Restart with `npm start`

**Images not loading**:
- Check your image URLs
- Make sure they end with the format parameters

**Changes not appearing**:
- Check for red errors in the terminal
- Try refreshing your browser (`F5` or `Ctrl+R`)

**Demo looks broken**:
- Stop the server (`Ctrl+C`)
- Run `npm start` again

### Getting Help

1. **Check the terminal**: Error messages usually explain what's wrong
2. **Use Cursor AI**: Select problematic code and press `Ctrl+K`
3. **Search online**: Copy error messages into Google
4. **Ask in GitHub Issues**: Create an issue on this repository

## 🎉 You're Ready to Go!

This demo is designed to be:
- **Easy to customize** for any destination
- **Professional looking** for client presentations
- **Fully functional** with realistic interactions
- **Mobile responsive** for demos on any device

### Next Steps

1. **Customize for your first client** using the instructions above
2. **Test thoroughly** by going through the entire user flow
3. **Present confidently** - this demo showcases real AI travel planning capabilities
4. **Iterate quickly** - make changes and see them instantly

---

**Need help?** Create an issue on GitHub or ask Cursor AI for assistance!

**Want to contribute?** Pull requests welcome for new destinations, features, or improvements!

Made with ❤️ for the travel tech community 