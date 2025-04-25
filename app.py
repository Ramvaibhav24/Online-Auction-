from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample user storage (you can use a database for real-world apps)
users = []

# Home route
@app.route('/')
def home():
    return render_template('signup.html')

# Signup route (handles form submission)
@app.route('/signup', methods=['POST'])
def signup():
    # Get form data
    full_name = request.form.get('fullname')
    email = request.form.get('email')
    password = request.form.get('password')
    confirm_password = request.form.get('confirm-password')
    phone = request.form.get('phone')
    address = request.form.get('address')
    city = request.form.get('city')
    state = request.form.get('state')
    zip_code = request.form.get('zip')

    # Validation
    if not full_name or not email or not password or not confirm_password:
        return "All required fields must be filled!", 400
    
    if password != confirm_password:
        return "Passwords do not match!", 400
    
    if len(password) < 6:
        return "Password must be at least 6 characters long!", 400

    # Store user in the "database" (in-memory list for demo purposes)
    users.append({
        'full_name': full_name,
        'email': email,
        'password': password,  # In real-world apps, hash passwords!
        'phone': phone,
        'address': address,
        'city': city,
        'state': state,
        'zip_code': zip_code
    })

    return redirect(url_for('home'))  # Redirect to the home page or a "success" page

if __name__ == '__main__':
    app.run(debug=True)
