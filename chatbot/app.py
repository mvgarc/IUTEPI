from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

def chatbot_response(user_message):
    user_message = user_message.lower().strip()
    if "hola" in user_message or "buenos dias" in user_message:
        return "¡Hola! ¿Cómo puedo ayudarte hoy?"
    elif "cómo estás" in user_message or "¿qué tal?" in user_message:
        return "Estoy bien, gracias por preguntar. ¿Y tú?"
    elif "adiós" in user_message or "hasta luego" in user_message:
        return "¡Adiós! Que tengas un buen día."
    elif "ayuda" in user_message:
        return "Puedo responder a preguntas básicas. Intenta preguntar por 'horario', 'contacto' o 'ubicación'."
    elif "horario" in user_message:
        return "Nuestro horario de atención es de 9:00 a 18:00 de lunes a viernes."
    elif "contacto" in user_message:
        return "Puedes contactarnos en el 555-1234 o enviarnos un correo a info@ejemplo.com."
    elif "ubicación" in user_message:
        return "Estamos ubicados en la Calle 123."
    else:
        return "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?"
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.json.get('message')
    response = chatbot_response(user_message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)