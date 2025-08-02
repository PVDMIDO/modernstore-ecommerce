# 🚀 Deploy ModernStore to GitHub Pages

## Step-by-Step Guide to Get Your E-Commerce Website Live

### 📋 Prerequisites
- GitHub account (free at [github.com](https://github.com))
- All your project files (which are already created)

## 🔧 Step 1: Configure for GitHub Pages

I've already created the necessary configuration files for you:
- `next.config.ts` - Updated for static export
- `package.json` - Added export script
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## 🚀 Step 2: Create GitHub Repository

1. **Go to [github.com](https://github.com)**
2. **Sign in** to your account
3. **Click "New repository"** (green button)
4. **Repository name**: `modernstore-ecommerce`
5. **Make it Public** (required for free GitHub Pages)
6. **Click "Create repository"**

## 📁 Step 3: Upload Your Files

### Method A: Web Upload (Easiest)
1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop ALL your project files**:
   - `package.json`
   - `next.config.ts`
   - `tsconfig.json`
   - All `src/` folder contents
   - All `public/` folder contents
   - All configuration files
3. **Commit message**: "Initial commit - ModernStore E-commerce website"
4. **Click "Commit changes"**

### Method B: Git Commands (If you have Git)
```bash
git init
git add .
git commit -m "Initial commit - ModernStore E-commerce website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/modernstore-ecommerce.git
git push -u origin main
```

## ⚙️ Step 4: Enable GitHub Pages

1. **In your repository**, go to **Settings** tab
2. **Scroll down** to **Pages** section (left sidebar)
3. **Source**: Select **"GitHub Actions"**
4. **GitHub will automatically detect** the workflow file
5. **Your site will start building!**

## 🌐 Step 5: Get Your Live URL

After 2-3 minutes, your website will be live at:
**`https://YOUR_USERNAME.github.io/modernstore-ecommerce/`**

Example: `https://johnsmith.github.io/modernstore-ecommerce/`

## 🎯 What You'll Get

Your live e-commerce website with:
- **Homepage** with hero section and featured products
- **Product Catalog** at `/products`
- **Shopping Cart** at `/cart` (try promo code "SAVE10")
- **Checkout Process** at `/checkout`
- **Wishlist** at `/wishlist`
- **Order Tracking** at `/order-tracking`
- **User Authentication** at `/account/login`
- **Admin Dashboard** at `/admin/dashboard`

## 🔄 Step 6: Updates

To update your website:
1. **Edit files** in your GitHub repository
2. **Commit changes**
3. **GitHub Actions will automatically rebuild** and deploy
4. **Your live site updates** in 2-3 minutes

## 🎮 Test Your Live Website

Once deployed, test these features:
- Browse products and use search/filters
- Add items to cart and apply promo code "SAVE10"
- Complete checkout process
- View admin dashboard analytics
- Test all navigation and functionality

## 🆓 Cost: Completely Free!

GitHub Pages is 100% free for public repositories, giving you:
- Free hosting
- Free SSL certificate (HTTPS)
- Free custom domain support
- Automatic deployments

## 🔧 Troubleshooting

If you encounter issues:
1. **Check the Actions tab** in your repository for build logs
2. **Ensure all files** are uploaded correctly
3. **Wait 5-10 minutes** for initial deployment
4. **Check that repository is public**

Your ModernStore e-commerce website will be live and accessible worldwide! 🌍
