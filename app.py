from flask import Flask, render_template, request, redirect, url_for, send_from_directory, session, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with your secret key for session management

# In-memory database for demonstration (replace with a database in a real-world application)
users = {}

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    if email in users and check_password_hash(users[email]['password'], password):
        # Store the user's first name and surname in the session
        session['user'] = {
            'firstname': users[email]['firstname'],
            'surname': users[email]['surname']
        }
        # Successful login, redirect to index.html in the static folder
        return redirect(url_for('serve_index'))
    else:
        # Failed login
        return 'Invalid email or password. Please try again.'

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        firstname = request.form.get('firstname')
        surname = request.form.get('surname')
        phone = request.form.get('phone')
        email = request.form.get('email')
        password = request.form.get('password')

        # Validate all required fields are present
        if not all([firstname, surname, phone, email, password]):
            return 'Please fill out all fields.'

        if email in users:
            return 'Email already exists. Please choose a different one.'

        # Hash the password before storing it
        hashed_password = generate_password_hash(password)

        # Store user data in the database
        users[email] = {
            'password': hashed_password,
            'firstname': firstname,
            'surname': surname,
            'phone': phone,
        }

        return redirect(url_for('index'))

    return render_template('register.html')

@app.route('/home')
def home():
    return redirect(url_for('serve_index'))

@app.route('/static/index.html')
def serve_index():
    return send_from_directory('static', 'index.html')

@app.route('/user-info')
def user_info():
    if 'user' in session:
        return jsonify(session['user'])
    else:
        return jsonify({'error': 'User not logged in'}), 401

if __name__ == '__main__':
    app.run(debug=True)
