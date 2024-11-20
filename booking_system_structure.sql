-- Users table
CREATE TABLE abc123_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(20) CHECK (role IN ('reserver', 'administrator')) NOT NULL,
    age INT CHECK (age >= 0),
    consent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Resources table
CREATE TABLE abc123_resources (
    resource_id SERIAL PRIMARY KEY,
    resource_name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Reservations table
CREATE TABLE abc123_reservations (
    reservation_id SERIAL PRIMARY KEY,
    resource_id INT REFERENCES abc123_resources(resource_id),
    user_id INT REFERENCES abc123_users(user_id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (start_time < end_time)
);

-- Function to check age before booking
CREATE FUNCTION check_age() RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT age FROM abc123_users WHERE user_id = NEW.user_id) < 15 THEN
        RAISE EXCEPTION 'User must be at least 15 years old to book a resource';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to enforce age check
CREATE TRIGGER age_check
BEFORE INSERT ON abc123_reservations
FOR EACH ROW EXECUTE FUNCTION check_age();

-- Function to update timestamps
CREATE FUNCTION update_timestamps() RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamps on update
CREATE TRIGGER update_user_timestamp
BEFORE UPDATE ON abc123_users
FOR EACH ROW EXECUTE FUNCTION update_timestamps();

CREATE TRIGGER update_reservation_timestamp
BEFORE UPDATE ON abc123_reservations
FOR EACH ROW EXECUTE FUNCTION update_timestamps();
