const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export async function getCustomerIdByEmail(email) {
  const token = localStorage.getItem('token'); 
  const response = await fetch(`${API_URL}/users/email/${email}`, {
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Error fetching customer ID');
  }
  return response.json();
}
