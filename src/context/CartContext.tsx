import React, { createContext, ReactNode, useState } from 'react'
import { ImageProps } from 'react-native'

export type CartItemProps = {
    id: string,
    image: ImageProps,
    name: string,
    measure: string,
    price: number,
    quantity: number,
}

export type CartContextType = {
    cartItem: CartItemProps[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItemProps[]>>,
    addToCart: (item: CartItemProps, quantity?: number) => void,
    removeFromCart: (id: string) => void,
    increaseQuantity: (id: string) => void,
    decreaseQuantity: (id: string) => void,
    TotalPrice: () => number,
    clearCart: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

type CartProviderProps = {
    children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItem, setCartItem] = useState<CartItemProps[]>([])

    const addToCart = (item: CartItemProps, quantity: number = 1) => {
        setCartItem((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prev.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            }

            return [...prev, { ...item, quantity }];
        });
    };


    const removeFromCart = (id: string) => {
        setCartItem((prev) => prev.filter((cartItem) => cartItem.id !== id))
    }

    const increaseQuantity = (id: string) => {
        setCartItem((prev) =>
            prev.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }
    const decreaseQuantity = (id: string) => {
        setCartItem((prev) =>
            prev.map((cartItem) =>
                cartItem.id === id && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
    }
    const TotalPrice = () => {
        return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const clearCart = () => {
        setCartItem([])
    }

    return (
        <CartContext.Provider value={{ cartItem, setCartItem, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, TotalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
