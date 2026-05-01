-- Market Data Snapshots
CREATE TABLE market_data_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID REFERENCES dealerships(id) ON DELETE CASCADE,
  snapshot_date DATE NOT NULL DEFAULT CURRENT_DATE,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year_range_start INTEGER,
  year_range_end INTEGER,
  fuel_type TEXT,
  region TEXT NOT NULL,
  avg_asking_price DECIMAL(12, 2),
  avg_days_to_sell INTEGER,
  total_listings INTEGER,
  demand_score INTEGER CHECK (demand_score >= 1 AND demand_score <= 100),
  source TEXT DEFAULT 'mock',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE market_data_snapshots ENABLE ROW LEVEL SECURITY;

-- Buying Recommendations
CREATE TABLE buying_recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID NOT NULL REFERENCES dealerships(id) ON DELETE CASCADE,
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'dismissed', 'purchased')),
  vehicle_spec JSONB NOT NULL,
  dismissed_at TIMESTAMPTZ,
  dismissed_reason TEXT
);

-- Enable RLS
ALTER TABLE buying_recommendations ENABLE ROW LEVEL SECURITY;

-- Watched Vehicles
CREATE TABLE watched_vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID NOT NULL REFERENCES dealerships(id) ON DELETE CASCADE,
  source TEXT CHECK (source IN ('facebook_marketplace', 'gumtree', 'autotrader_private')),
  external_url TEXT,
  registration TEXT,
  make TEXT,
  model TEXT,
  year INTEGER,
  mileage INTEGER,
  asking_price DECIMAL(12, 2),
  location TEXT,
  ai_assessment JSONB,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'purchased', 'dismissed')),
  found_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE watched_vehicles ENABLE ROW LEVEL SECURITY;

-- Portfolio Analysis
CREATE TABLE portfolio_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dealership_id UUID NOT NULL REFERENCES dealerships(id) ON DELETE CASCADE,
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  overall_score INTEGER CHECK (overall_score >= 0 AND overall_score <= 100),
  analysis_json JSONB,
  ai_commentary TEXT
);

-- Enable RLS
ALTER TABLE portfolio_analysis ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES --

CREATE POLICY md_snapshot_isolation ON market_data_snapshots
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY buying_rec_isolation ON buying_recommendations
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY watched_v_isolation ON watched_vehicles
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY portfolio_a_isolation ON portfolio_analysis
  FOR ALL USING (dealership_id IN (SELECT dealership_id FROM profiles WHERE id = auth.uid()));

-- INDEXES --
CREATE INDEX idx_md_snapshot_make_model ON market_data_snapshots(make, model);
CREATE INDEX idx_md_snapshot_region ON market_data_snapshots(region);
CREATE INDEX idx_buying_rec_dealership ON buying_recommendations(dealership_id);
CREATE INDEX idx_watched_v_status ON watched_vehicles(status);
