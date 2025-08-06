from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

def chatbot_response(user_message):
    user_message = user_message.lower().strip()
    if "hola" in user_message or "buenos dias" in user_message:
        return "¡Hola! ¿Cómo puedo ayudarte hoy?"
    
