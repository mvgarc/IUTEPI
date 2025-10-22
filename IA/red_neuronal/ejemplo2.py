import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# --- 1. GENERACIÓN Y PREPROCESAMIENTO DE DATOS ---
print("1. Generando datos...")

# Generar 1000 puntos de datos de entrada (X)
X = np.linspace(-5, 5, 1000) 
# Generar la salida (Y) como X^2, con ruido para simular datos reales
y = X**2 + np.random.normal(0, 2, 1000) 

# Dividir en conjuntos de entrenamiento y prueba (80% para entrenar, 20% para probar)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# REQUISITO CLAVE: Las redes neuronales en Keras esperan datos de entrada 2D (muestras, características).
# Cambiamos la forma de (800,) a (800, 1)
X_train = X_train.reshape(-1, 1)
X_test = X_test.reshape(-1, 1)

print(f"   Datos de entrenamiento: {X_train.shape[0]} muestras.")
print("   Datos listos para la red.")

# --- 2. CONSTRUCCIÓN DEL MODELO DE REGRESIÓN DENSA ---
print("\n2. Construyendo el modelo...")

model = Sequential([
    # Capa Oculta 1: 32 neuronas para aprender la relación no lineal (X^2). 
    # 'relu' es vital para la no linealidad. 'input_shape=(1,)' indica 1 característica de entrada.
    Dense(32, activation='relu', input_shape=(1,)), 
    
    # Capa Oculta 2: Profundidad adicional para mejor aprendizaje.
    Dense(32, activation='relu'),
    
    # Capa de Salida: **1 neurona** (para predecir el único valor Y).
    # Sin función de activación (implica 'linear'), ya que queremos un valor numérico continuo.
    Dense(1) 
])

# Mostrar el resumen de las capas
model.summary()

# --- 3. COMPILACIÓN Y ENTRENAMIENTO ---
print("\n3. Compilando y entrenando el modelo...")

# Compilación para Regresión:
# - loss='mse' (Mean Squared Error) es la función de coste estándar para regresión.
# - metrics='mae' (Mean Absolute Error) es una métrica fácil de interpretar.
model.compile(optimizer='adam',
              loss='mse',  
              metrics=['mae'])

# Entrenamiento
history = model.fit(X_train, y_train, 
                    epochs=100, # Aumentamos los epochs para asegurar la convergencia en regresión
                    batch_size=32,
                    validation_split=0.1, # Usamos 10% del entrenamiento para validación
                    verbose=0) # Mantenemos el output limpio

print("   Entrenamiento finalizado.")

# --- 4. EVALUACIÓN Y PREDICCIÓN ---
print("\n4. Evaluando el modelo...")

# Evaluar el modelo con el conjunto de prueba
loss, mae = model.evaluate(X_test, y_test, verbose=0)
print(f"   Error Cuadrático Medio (Loss/MSE) en prueba: {loss:.2f}")
print(f"   Error Absoluto Medio (MAE) en prueba: {mae:.2f} (El error promedio en la predicción de Y)")

# Hacer predicciones para una visualización
X_range = np.linspace(X.min(), X.max(), 100).reshape(-1, 1)
predictions = model.predict(X_range)

# --- 5. VISUALIZACIÓN DE RESULTADOS ---
print("\n5. Visualizando resultados (se abrirá una gráfica)...")

plt.figure(figsize=(10, 6))

# Puntos de datos originales con ruido
plt.scatter(X, y, label='Datos Originales (X vs X^2 + ruido)', alpha=0.5, color='gray')

# La curva de predicción de la red
plt.plot(X_range, predictions, color='red', linewidth=3, label='Curva de Predicción de la Red Neuronal')

plt.title(f'Regresión No Lineal con Red Neuronal Densa (MAE: {mae:.2f})')
plt.xlabel('Valor de Entrada (X)')
plt.ylabel('Valor de Salida (Y)')
plt.legend()
plt.grid(True)
plt.savefig('regresion_resultado.png')
print("   Archivo 'regresion_resultado.png' creado en la misma carpeta.")