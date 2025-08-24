# Netlify Deployment for Next.js Portfolio

## ✅ **What's Fixed:**

1. **Removed static export** configuration
2. **Installed Netlify Next.js plugin** (`@netlify/plugin-nextjs`)
3. **Proper netlify.toml** configuration
4. **Clean build process** without export scripts

## 🔧 **Netlify Build Settings:**

Make sure these are set in your Netlify dashboard:

### **Build Settings:**
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 or higher

### **Environment Variables:**
- `OPENAI_API_KEY`: Your OpenAI API key (mark as "Contains secret values")

## 🚀 **Deployment Steps:**

1. **Commit and push** your changes to GitHub
2. **Netlify will auto-deploy** with the new configuration
3. **Check the Functions tab** - you should see your API routes working
4. **Test the chat** on your live site

## 📁 **Key Files:**

- **`netlify.toml`**: Tells Netlify how to build and deploy
- **`@netlify/plugin-nextjs`**: Plugin that enables Next.js features
- **`next.config.ts`**: Clean Next.js configuration (no static export)

## 🎯 **Expected Results:**

- ✅ **No more 404 errors** for `/api/chat`
- ✅ **Chat widget works** in production
- ✅ **Full Next.js functionality** available
- ✅ **API routes** properly handled

## 🔍 **If You Still Get 404:**

1. **Check Netlify build logs** for any errors
2. **Verify environment variables** are set
3. **Ensure the plugin** is properly installed
4. **Check publish directory** is `.next` (not `out`)

Your portfolio should now work perfectly on Netlify with full Next.js support! 🎉
