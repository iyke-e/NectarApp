import { useContext } from 'react';
import { CartContext, CartContextType } from '@context/CartContext';

// Custom hook to use Cart Context
export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
