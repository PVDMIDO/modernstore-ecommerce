// CodeSandbox Setup Script for ModernStore E-Commerce Website
// This ensures the project runs smoothly on CodeSandbox

console.log('🚀 ModernStore E-Commerce Website');
console.log('📦 Setting up for CodeSandbox deployment...');

// Check if we're in CodeSandbox environment
if (typeof window !== 'undefined' && window.location.hostname.includes('csb.app')) {
  console.log('✅ Running on CodeSandbox!');
  console.log('🌐 Your e-commerce website is live!');
  
  // Log available features
  console.log('\n🛍️ Available Features:');
  console.log('- Homepage: /');
  console.log('- Products: /products');
  console.log('- Shopping Cart: /cart');
  console.log('- Checkout: /checkout');
  console.log('- Wishlist: /wishlist');
  console.log('- Order Tracking: /order-tracking');
  console.log('- User Login: /account/login');
  console.log('- Admin Dashboard: /admin/dashboard');
  
  console.log('\n🎮 Test Features:');
  console.log('- Use promo code "SAVE10" for 10% discount');
  console.log('- Free shipping on orders over $50');
  console.log('- Sample products and orders included');
  
  console.log('\n🎉 Your ModernStore is ready for customers!');
}

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    name: 'ModernStore E-Commerce Website',
    version: '1.0.0',
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Checkout Process',
      'User Authentication',
      'Wishlist',
      'Order Tracking',
      'Admin Dashboard'
    ],
    deployment: 'CodeSandbox Ready'
  };
}
