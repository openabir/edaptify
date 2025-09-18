-- Sample Data for Learning Platform
-- Run this AFTER running schema.sql

-- Insert sample courses (you'll need to replace instructor_id with actual user IDs after user registration)
INSERT INTO public.courses (id, title, description, image_url, price, instructor_id, published) VALUES
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'Complete Web Development Bootcamp',
  'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive web development course. Perfect for beginners and intermediate developers looking to advance their skills.',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center',
  99.99,
  'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', -- Replace with actual instructor ID
  true
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
  'Python for Data Science',
  'Master Python programming for data analysis, visualization, and machine learning. Includes pandas, numpy, matplotlib, and scikit-learn.',
  'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=500&h=300&fit=crop&crop=center',
  149.99,
  'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  true
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
  'UI/UX Design Fundamentals',
  'Learn the principles of user interface and user experience design. Create beautiful, functional designs using modern design tools and methodologies.',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=center',
  79.99,
  'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', -- Replace with actual instructor ID
  true
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
  'Mobile App Development with React Native',
  'Build cross-platform mobile applications using React Native. Learn to create apps for both iOS and Android platforms.',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center',
  129.99,
  'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  true
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
  'Digital Marketing Mastery',
  'Complete guide to digital marketing including SEO, social media marketing, email marketing, and paid advertising strategies.',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
  89.99,
  'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
  true
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
  'Blockchain and Cryptocurrency',
  'Understand blockchain technology, cryptocurrencies, and smart contract development. Learn to build decentralized applications.',
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&crop=center',
  199.99,
  'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  true
);

-- Insert sample lessons for the Web Development course
INSERT INTO public.lessons (course_id, title, content, order_index) VALUES
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'Introduction to Web Development',
  'Welcome to the Complete Web Development Bootcamp! In this lesson, we''ll cover what web development is, the technologies we''ll learn, and how to set up your development environment.',
  1
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'HTML Fundamentals',
  'Learn the building blocks of web pages with HTML. We''ll cover elements, attributes, semantic HTML, and best practices for structuring web content.',
  2
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'CSS Styling and Layout',
  'Master CSS for styling web pages. Learn about selectors, properties, flexbox, grid, and responsive design principles.',
  3
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'JavaScript Basics',
  'Introduction to JavaScript programming. Variables, functions, DOM manipulation, and event handling.',
  4
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'React Introduction',
  'Getting started with React. Components, JSX, props, and state management.',
  5
);

-- Insert sample lessons for Python course
INSERT INTO public.lessons (course_id, title, content, order_index) VALUES
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
  'Python Basics',
  'Introduction to Python programming language. Variables, data types, and basic operations.',
  1
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
  'Working with Pandas',
  'Data manipulation and analysis using the Pandas library. DataFrames, Series, and data cleaning.',
  2
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
  'Data Visualization',
  'Creating charts and graphs with Matplotlib and Seaborn for data visualization.',
  3
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
  'Machine Learning Basics',
  'Introduction to machine learning concepts and scikit-learn library.',
  4
);

-- Insert sample lessons for UI/UX course
INSERT INTO public.lessons (course_id, title, content, order_index) VALUES
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
  'Design Principles',
  'Fundamental principles of good design: balance, contrast, emphasis, and unity.',
  1
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
  'User Research',
  'Understanding your users through research methods and persona development.',
  2
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
  'Wireframing and Prototyping',
  'Creating wireframes and prototypes to test and validate design ideas.',
  3
),
(
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
  'Design Tools Mastery',
  'Working with Figma, Adobe XD, and other design tools for professional UI/UX design.',
  4
);