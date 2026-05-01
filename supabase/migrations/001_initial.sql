-- Create dealerships table
CREATE TABLE dealerships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  vat_number TEXT,
  fca_number TEXT,
  autotrader_feed_url TEXT,
  ebay_store_id TEXT,
  subscription_tier TEXT DEFAULT 'starter' CHECK (subscription_tier IN ('starter', 'professional', 'elite')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on dealerships
ALTER TABLE dealerships ENABLE ROW LEVEL SECURITY;

-- Create profiles table (links to auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  dealership_id UUID REFERENCES dealerships ON DELETE SET NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('owner', 'manager', 'sales')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create vehicles table
CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID NOT NULL REFERENCES dealerships ON DELETE CASCADE,
  registration TEXT NOT NULL,
  vin TEXT,
  make TEXT,
  model TEXT,
  variant TEXT,
  year INTEGER,
  mileage INTEGER,
  colour TEXT,
  fuel_type TEXT CHECK (fuel_type IN ('petrol', 'diesel', 'hybrid', 'electric')),
  transmission TEXT CHECK (transmission IN ('manual', 'automatic')),
  body_type TEXT,
  doors INTEGER,
  engine_size TEXT,
  co2_emissions TEXT,
  purchase_price DECIMAL(12, 2),
  prep_cost DECIMAL(12, 2) DEFAULT 0,
  transport_cost DECIMAL(12, 2) DEFAULT 0,
  asking_price DECIMAL(12, 2),
  trade_value DECIMAL(12, 2),
  retail_value DECIMAL(12, 2),
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'reserved', 'sold', 'prep')),
  condition TEXT CHECK (condition IN ('excellent', 'good', 'fair')),
  description TEXT,
  highlights TEXT[] DEFAULT '{}',
  mot_expiry DATE,
  service_history TEXT CHECK (service_history IN ('full', 'partial', 'none')),
  hpi_clear BOOLEAN DEFAULT false,
  hpi_checked_at TIMESTAMPTZ,
  published_autotrader BOOLEAN DEFAULT false,
  published_ebay BOOLEAN DEFAULT false,
  published_cargurus BOOLEAN DEFAULT false,
  photos TEXT[] DEFAULT '{}',
  primary_photo_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  sold_at TIMESTAMPTZ,
  sold_price DECIMAL(12, 2)
);

-- Enable RLS on vehicles
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- Create leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID NOT NULL REFERENCES dealerships ON DELETE CASCADE,
  vehicle_id UUID REFERENCES vehicles ON DELETE SET NULL,
  source TEXT CHECK (source IN ('website', 'autotrader', 'ebay', 'cargurus', 'walkin', 'phone')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'test_drive', 'offer', 'won', 'lost')),
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  notes TEXT,
  assigned_to UUID REFERENCES profiles(id) ON DELETE SET NULL,
  finance_interest BOOLEAN DEFAULT false,
  part_ex_reg TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_contacted_at TIMESTAMPTZ,
  next_followup_at TIMESTAMPTZ
);

-- Enable RLS on leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create activities table
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID NOT NULL REFERENCES dealerships ON DELETE CASCADE,
  lead_id UUID REFERENCES leads ON DELETE CASCADE,
  vehicle_id UUID REFERENCES vehicles ON DELETE SET NULL,
  type TEXT NOT NULL CHECK (type IN ('call', 'email', 'sms', 'note', 'test_drive', 'offer', 'status_change')),
  content TEXT,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on activities
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Create expenses table
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id UUID REFERENCES vehicles ON DELETE CASCADE,
  dealership_id UUID NOT NULL REFERENCES dealerships ON DELETE CASCADE,
  category TEXT CHECK (category IN ('prep', 'transport', 'valet', 'photography', 'mechanical', 'other')),
  amount DECIMAL(12, 2) NOT NULL,
  description TEXT,
  date DATE DEFAULT CURRENT_DATE
);

-- Enable RLS on expenses
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES --

-- Dealerships: Users can only see their own dealership
CREATE POLICY dealership_isolation ON dealerships
  USING (id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- Profiles: Users can see profiles in their dealership
CREATE POLICY profile_isolation ON profiles
  USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- Vehicles: Dealership isolation
CREATE POLICY vehicle_isolation ON vehicles
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- Leads: Dealership isolation
CREATE POLICY lead_isolation ON leads
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- Activities: Dealership isolation
CREATE POLICY activity_isolation ON activities
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- Expenses: Dealership isolation
CREATE POLICY expense_isolation ON expenses
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- INDEXES --
CREATE INDEX idx_vehicles_dealership ON vehicles(dealership_id);
CREATE INDEX idx_leads_dealership ON leads(dealership_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_activities_lead ON activities(lead_id);
CREATE INDEX idx_expenses_vehicle ON expenses(vehicle_id);
