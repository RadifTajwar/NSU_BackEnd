
import axios from 'axios';


export async function fetchOrderDetails () {
  try {
    const response = await axios.get('http://localhost:5000/api/agent/order'); // Assuming your API endpoint is '/api/order-details'
   return response.data;
  } catch (error) {
    console.error('Error fetching order details:', error);
  }
};

export async function fetchAgentDetails() {
  try {
    const response = await axios.get('http://localhost:5000/api/agent');
    return response.data;
  } catch (error) {
    console.log('Error fetching agent details',error);
  }
}

export async function fetchCustomerDetailsByAgentId(id: any) {
  const agentIdData = {
    agentId: id
  };
  try {
    const response = await axios.post('http://localhost:5000/api/agent/id',agentIdData);
    return response.data;
  } catch (error) {
    console.log('Error fetching agent details',error);
  }
}

export async function totalCollected () {
  try {
    const response = await axios.get('http://localhost:5000/api/company/collected');
    return response.data.totalAmountCollected;
  } catch (error) {
    console.log('Error fetching agent details',error);
  }
}

export async function totalAgents() {
  try {
    const response = await axios.get('http://localhost:5000/api/company/agents');
    return response.data.count;
  } catch (error) {
    console.log('Error fetching agent details',error);
  }
}

export async function totalInvoices() {
  try {
    const response = await axios.get('http://localhost:5000/api/company/invoices');
    return response.data.invoices;
  } catch (error) {
    console.log('Error fetching agent details',error);
  }
}

export async function totalCustomers() {
  try {
    const response = await axios.get('http://localhost:5000/api/company/customers');
    return response.data.count;
  } catch (error) {
    console.log('Error fetching agent details',error);
  }
}