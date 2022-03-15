BEGIN;

DROP TABLE IF EXISTS patients, doctors, reviews CASCADE;

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    department VARCHAR(20) NOT NULL,
    descreption text NOT NULL,
    Img_URL TEXT NOT NULL,
    phone VARCHAR(12) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content text NOT NULL,
    doctor_id INT,
    patient_id INT,
    FOREIGN KEY(doctor_id) REFERENCES doctors(id),
    FOREIGN KEY(patient_id) REFERENCES patients(id),
);


INSERT INTO
    doctors (name, department, descreption, Img_URL, phone)
VALUES
    ('Nada Lwisky', 'dentistry', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry','https://faces-img.xcdn.link/image-lorem-face-3430.jpg','0587965423'),
    ('Noor Zaidan', 'immunology', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' ,'https://userstock.io/data/wp-content/uploads/2017/07/william-stitt-119525-300x300.jpg','0587965423'),
    ('Nadin Nusrat', 'Neurology', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' ,'https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-300x300.jpg','0587965423'),
    ('Mona El-faisal', 'Pathology','Lorem Ipsum is simply dummy text of the printing and typesetting industry' ,'https://userstock.io/data/wp-content/uploads/2020/06/aiony-haust-3TLl_97HNJo-300x300.jpg','0587965423'),
    ('Moh Al-Khatib', 'Urology', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' ,'https://userstock.io/data/wp-content/uploads/2017/07/william-stitt-151773-300x300.jpg','0587965423');
COMMIT;
