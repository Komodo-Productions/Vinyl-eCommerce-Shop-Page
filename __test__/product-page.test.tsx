import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter, useParams } from 'next/navigation';
import ProductPage from '../app/product/[id]/page';
import CheckoutButton from '../app/components/CheckoutButton';

// Fixed mock for next/head
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    },
  };
});

// Mock for next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useParams: jest.fn(),
}));

// Mock for product service
jest.mock('../app/services/productService', () => ({
  getProductById: jest.fn(),
}));

// Mock for AuthContext
jest.mock('../app/context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

// Mock for CheckOut component
jest.mock('../app/components/CheckOut', () => {
  return function MockCheckOut({ onClose }: { onClose: () => void }) {
    return (
      <div data-testid="checkout-modal">
        <p>Checkout Modal</p>
        <button onClick={onClose}>Close Checkout</button>
      </div>
    );
  };
});

// Mock for window.history.pushState
const mockPushState = jest.fn();
Object.defineProperty(window, 'history', {
  value: {
    pushState: mockPushState,
  },
  writable: true,
});

describe('Product Page - Checkout Authentication', () => {
  const mockPush = jest.fn();
  const mockProduct = {
    id_product: 1,
    name: 'Blue Harmony',
    artist: 'Test Artist',
    description: 'The bohemian spirit and undeniable beauty of "Blue Harmony "',
    price: 55,
    publication_date: '2024-01-01'
  };
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    
    // Mock for useParams
    (useParams as jest.Mock).mockReturnValue({
      id: '1'
    });
    
    // Mock for product service
    const { getProductById } = require('../app/services/productService');
    getProductById.mockResolvedValue(mockProduct);
    
    mockPush.mockClear();
    mockPushState.mockClear();
  });

  test('should display "Buy" button when user is not logged in', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: null,
      isLoading: false,
    });
    
    render(<ProductPage />);
    
    // Wait for the component to finish loading
    await waitFor(() => {
      const buyButton = screen.getByText(/buy/i);
      expect(buyButton).toBeInTheDocument();
    });
  });

  test('should display "Buy" button when user is logged in', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<ProductPage />);
    
    // Wait for the component to finish loading
    await waitFor(() => {
      const buyButton = screen.getByText(/buy/i);
      expect(buyButton).toBeInTheDocument();
    });
  });

  test('should open checkout modal when user clicks "Buy"', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: null,
      isLoading: false,
    });
    
    render(<ProductPage />);
    
    // Wait for the component to finish loading
    await waitFor(() => {
      expect(screen.getByText(/buy/i)).toBeInTheDocument();
    });
    
    const buyButton = screen.getByText(/buy/i);
    fireEvent.click(buyButton);
    
    // Check if checkout modal appears
    await waitFor(() => {
      const checkoutModal = screen.getByTestId('checkout-modal');
      expect(checkoutModal).toBeInTheDocument();
    });
  });

  test('should update URL with product query parameters when opening checkout', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<ProductPage />);
    
    // Wait for the component to finish loading
    await waitFor(() => {
      expect(screen.getByText(/buy/i)).toBeInTheDocument();
    });
    
    const buyButton = screen.getByText(/buy/i);
    fireEvent.click(buyButton);
    
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      '',
      expect.stringContaining('/checkout?')
    );
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      '',
      expect.stringContaining('name=Blue+Harmony')
    );
  });
});

// Specific test for CheckoutButton component
describe('CheckoutButton Component', () => {
  const mockPush = jest.fn();
  const mockProduct = {
    name: 'Test Product',
    price: 99,
  };
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    mockPush.mockClear();
    mockPushState.mockClear();
  });

  test('should display loading state when auth is loading', () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: null,
      isLoading: true,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    const loadingButton = screen.getByText(/loading\.\.\./i);
    expect(loadingButton).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should display "Buy" button when not logged in', () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: null,
      isLoading: false,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    const buyButton = screen.getByText(/buy/i);
    expect(buyButton).toBeInTheDocument();
  });

  test('should display "Buy" button when logged in', () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    const buyButton = screen.getByText(/buy/i);
    expect(buyButton).toBeInTheDocument();
  });

  test('should open checkout modal when clicked', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    const buyButton = screen.getByText(/buy/i);
    fireEvent.click(buyButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('checkout-modal')).toBeInTheDocument();
    });
  });

  test('should update URL with correct query parameters', () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    const buyButton = screen.getByText(/buy/i);
    fireEvent.click(buyButton);
    
    expect(mockPushState).toHaveBeenCalledWith(
      {},
      '',
      '/checkout?name=Test+Product&price=99&quantity=2'
    );
  });

  test('should close modal when close button is clicked', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    // Open modal
    const buyButton = screen.getByText(/buy/i);
    fireEvent.click(buyButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('checkout-modal')).toBeInTheDocument();
    });
    
    // Close modal using X button
    const closeXButton = screen.getByText('✕');
    fireEvent.click(closeXButton);
    
    await waitFor(() => {
      expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
    });
  });

  test('should close modal when Close Checkout button is clicked', async () => {
    const { useAuth } = require('../app/context/AuthContext');
    useAuth.mockReturnValue({
      user: { id: 1, email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<CheckoutButton product={mockProduct} quantity={2} />);
    
    // Open modal
    const buyButton = screen.getByText(/buy/i);
    fireEvent.click(buyButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('checkout-modal')).toBeInTheDocument();
    });
    
    // Close modal using Close Checkout button
    const closeButton = screen.getByText(/close checkout/i);
    fireEvent.click(closeButton);
    
    await waitFor(() => {
      expect(screen.queryByTestId('checkout-modal')).not.toBeInTheDocument();
    });
  });
});