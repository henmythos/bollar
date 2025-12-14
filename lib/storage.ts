// --- CONFIGURATION ---
// Connected to Bollar Properties Sheet
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzrholsT1_b5JLHZFTjAKcpkHOMx2ZS8SdnsauEAPTg-DhtO_lRXPOJueLkmPLVnvhr/exec"; 

// --- TYPES ---
export interface Lead {
  Date: string;
  Name: string;
  Phone: string;
  Email: string;
  Project: string;
  Source: string;
  Status: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  price: string;
  status: 'Active' | 'Sold Out' | 'Coming Soon';
  description: string;
  imageURL: string;
  brochureURL: string;
  createdAt: string;
}

// --- LEADS (GOOGLE SHEETS) ---

export const addLead = async (leadData: { name: string; phone: string; email: string; message: string; source: string; project: string }) => {
  try {
    // IMPORTANT: Google Apps Script Web Apps do not support CORS preflight (OPTIONS) requests.
    // We must use 'no-cors' mode.
    // We must use 'text/plain' as Content-Type, because 'application/json' triggers a preflight check which fails.
    // The Google Script `JSON.parse(e.postData.contents)` will still parse the string body correctly.
    
    await fetch(SHEET_API_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "text/plain", 
      },
      body: JSON.stringify(leadData),
    });
    
    console.log("Lead sent to Google Sheet (No-CORS mode)");
    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    // In no-cors mode, we can't fully verify success on client side, but we catch network errors.
    return { success: false, error };
  }
};

export const getLeads = async (): Promise<Lead[]> => {
  try {
    // Add timestamp to prevent browser caching of the GET request
    const response = await fetch(`${SHEET_API_URL}?t=${new Date().getTime()}`);
    const data = await response.json();
    
    // Check if data is array (handle potential script errors returning objects)
    if (Array.isArray(data)) {
         // Sort by Date descending (assuming Date is ISO string or parseable)
        return data.sort((a: any, b: any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
    }
    return [];
   
  } catch (error) {
    console.error("Error fetching leads:", error);
    return [];
  }
};

// --- PROJECTS (LOCAL STORAGE) ---

const PROJECTS_KEY = "bollaar_projects";

const getStoredProjects = (): Project[] => {
    const stored = localStorage.getItem(PROJECTS_KEY);
    return stored ? JSON.parse(stored) : [];
}

export const getProjects = async (): Promise<Project[]> => {
    // Simulating async to match previous API
    return new Promise((resolve) => {
        let projects = getStoredProjects();
        if (projects.length === 0) {
            // Seed initial data if empty
            projects = [
                {
                    id: "1",
                    title: "The Prestige City",
                    location: "Budvel, Hyderabad",
                    price: "₹ 1.50 Cr*",
                    status: "Active",
                    description: "Luxury 3 & 4 BHK Apartments in a 31-acre township.",
                    imageURL: "https://i.postimg.cc/ZKsbR9f0/img10201.jpg",
                    brochureURL: "",
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
        }
        resolve(projects);
    });
}

export const addProject = async (project: Omit<Project, 'id' | 'createdAt'>) => {
    const projects = getStoredProjects();
    const newProject: Project = {
        ...project,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
    };
    projects.unshift(newProject);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    return newProject.id;
}

export const updateProjectStatus = async (id: string, status: string) => {
    const projects = getStoredProjects();
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        // @ts-ignore
        projects[index].status = status;
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    }
}

export const deleteProject = async (id: string) => {
    const projects = getStoredProjects();
    const filtered = projects.filter(p => p.id !== id);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
}