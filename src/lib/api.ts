// API client for Laravel backend
// Phase 1: No backend yet, just placeholder
// Phase 2: Connect to backend API (TBD)

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8000';

export interface Lead {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  message?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
}

export interface ChatMessage {
  conversation_id?: string;
  message: string;
  lead_email?: string;
}

export interface Doctor {
  id: number;
  name: string;
  slug: string;
  specialty: string;
  country: string;
  city: string;
  clinic_name: string;
  bio: string;
  experience_years: number;
  photo_url: string;
}

export interface Procedure {
  id: number;
  name: string;
  slug: string;
  type: string;
  description: string;
  price_min: number;
  price_max: number;
}

// Submit lead form
export async function submitLead(lead: Lead) {
  const response = await fetch(`${API_URL}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error('Failed to submit lead');
  }

  return response.json();
}

// Send chat message
export async function sendChatMessage(data: ChatMessage) {
  const response = await fetch(`${API_URL}/api/chat/message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}

// Upload photo for AI analysis
export async function uploadPhoto(conversationId: string, file: File) {
  const formData = new FormData();
  formData.append('photo', file);
  formData.append('conversation_id', conversationId);

  const response = await fetch(`${API_URL}/api/chat/upload-photo`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload photo');
  }

  return response.json();
}

// Get all doctors
export async function getDoctors(): Promise<Doctor[]> {
  const response = await fetch(`${API_URL}/api/doctors`);

  if (!response.ok) {
    throw new Error('Failed to fetch doctors');
  }

  const data = await response.json();
  return data.data;
}

// Get all procedures
export async function getProcedures(): Promise<Procedure[]> {
  const response = await fetch(`${API_URL}/api/procedures`);

  if (!response.ok) {
    throw new Error('Failed to fetch procedures');
  }

  const data = await response.json();
  return data.data;
}