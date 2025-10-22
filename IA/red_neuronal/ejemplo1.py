import numpy as np
def sigmoide(x):
    """
    Función de Activación: Comprime un valor entre 0 y 1.
    """
    return 1 / (1 + np.exp(-x))

def derivada_sigmoide(output):
    """
    Derivada de la Sigmoide: Necesaria para saber CUÁNTO ajustar los pesos.
    El 'output' es la salida (resultado) de la sigmoide.
    """
    return output * (1 - output)

# Entradas (4 ejemplos, 2 caracteristicas cada uno)
# Queremos que aprenda la funcion XOR: [0,0]->0, [0,1]->1, [1,0]->1, [1,1]->0
datos_entrada = np.array([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
])

# Salidas Deseadas (Respuestas correctas)
salidas_deseadas = np.array([[0, 1, 1, 0]]).T  # .T transpone a forma (4 filas, 1 columna)

# Inicialización de la "memoria" de la red
np.random.seed(1) # Para tener resultados reproducibles

# Inicialización de Pesos (Conexiones entre las 2 entradas y la 1 neurona de salida)
# Matriz de 2 filas y 1 columna, con valores aleatorios entre -1 y 1
pesos = 2 * np.random.random((2, 1)) - 1

print("--- PESOS INICIALES ---")
print(pesos)
epocas = 60000 # Un número grande para asegurar el aprendizaje del XOR

for i in range(epocas):
    
    # PROPAGACIÓN HACIA ADELANTE (FORWARD)
    # 1. Multiplicación (Entradas * Pesos)
    z = np.dot(datos_entrada, pesos)
    
    # 2. Obtener la Predicción (Aplicar Sigmoide)
    capa_salida = sigmoide(z)

    # CÁLCULO DEL ERROR
    error = salidas_deseadas - capa_salida
    
    # Para el seguimiento, imprimimos el error cada 10000 épocas
    if (i % 10000) == 0:
        print(f"Error en época {i}: {np.mean(np.abs(error)):.4f}")

    # 1. Cálculo del Delta (Error ajustado por la Tasa de Cambio)
    delta = error * derivada_sigmoide(capa_salida)
    
    # 2. Cáculo del Ajuste: ¿Cuánto deben cambiar los pesos?
    ajuste_pesos = np.dot(datos_entrada.T, delta)
    
    # 3. ACTUALIZACIÓN DE PESOS (El aprendizaje)
    pesos += ajuste_pesos 

print("\n--- RESULTADO FINAL DESPUÉS DEL ENTRENAMIENTO ---")
print("PESOS APRENDIDOS:\n", pesos.round(4))
print("\nPREDICCIONES DE LA RED (Salida):")
# Se imprimen las predicciones y se redondean para ver si se acercan a [0, 1, 1, 0]
print(capa_salida.round(4))