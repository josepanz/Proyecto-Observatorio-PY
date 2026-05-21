# Proyecto Integral de Reforma Democrática y Transparencia Nacional para Paraguay
Un modelo conceptual y tecnológico diseñado para el fortalecimiento democrático, la reducción de la corrupción sistémica y la descentralización del control político en la República del Paraguay mediante auditoría inteligente y participación ciudadana continua.

## 📌 Visión General
El Proyecto de Reforma Democrática Nacional propone una transición hacia un modelo híbrido de democracia representativa y participativa digital. El núcleo de la propuesta no busca reemplazar las instituciones democráticas, sino dotar al ciudadano de herramientas de auditoría en tiempo real y blindar el sistema electoral contra distorsiones estructurales y el clientelismo histórico.

## 🛠️ Pilares Fundamentales de la Reforma
1. Mecanismos Electorales Disruptivos
- **Voto "Ninguno me representa":** Cláusula de nulidad automática de elecciones si la opción de rechazo supera el 50% de los votos válidos, inhabilitando a los candidatos rechazados para el siguiente período extraordinario (Límite: 2 repeticiones).

- **Desbloqueo Absoluto de Listas (Eliminación de Listas Sábana):** Transición hacia un sistema de voto directo nominal estricto, mitigando el arrastre de caudillos políticos.

- **Revocatoria Ciudadana de Mandato:** Activación regulada mediante firmas digitales verificado por la Justicia Electoral (requiere el 15% del padrón electoral tras el primer año de gestión).

- **Disolución Extraordinaria del Congreso:** Mecanismo de válvula de escape constitucional ante bloqueos institucionales extremos (ej. 12 meses sin Presupuesto General de la Nación aprobado o parálisis certificada por la CSJ).

2. Sistema Nacional de Auditoría con Inteligencia Artificial
Un paradigma de control donde la tecnología rastrea recursos públicos e identifica anomalías matemáticas financieras sin vulnerar los derechos civiles ni la privacidad de la ciudadanía.

- **Sujetos Obligados:** Inscripción mandatoria y automatizada para las máximas autoridades (Presidente, Vicepresidente, Senadores, Diputados, Ministros, Intendentes y Directores de Entidades Binacionales/Estatales).

- **Vectores de Análisis IA:**
  - Incrementos patrimoniales no justificados mediante cruces de activos.
  - Grafos de relaciones familiares y comerciales en licitaciones públicas (detección de nepotismo y empresas fantasma).
  - Análisis predictivo de sobreprecios en el portal de Contrataciones Públicas (DNCP).
  - Garantías Constitucionales: Aislamiento estricto de datos privados. El sistema opera bajo logs auditables y requiere autorización judicial para derivaciones penales, evitando la persecución ideológica.

## 🏗️ Arquitectura Tecnológica del Observatorio
El ecosistema técnico del proyecto se enfoca en la descentralización, la inmutabilidad y el procesamiento local de datos para garantizar soberanía y auditoría transparente:
```text
[Fuentes Públicas: DNCP / TSJE / Declaraciones]
                 │
                 ▼
     [Orquestación local: n8n]
                 │
                 ▼
   [Análisis de Redes y Grafos (IA)] ◄───► [Modelos de Lenguaje Locales (Ollama / Llama 3)]
                 │
                 ▼
    [Persistencia: PostgreSQL / Prisma]
                 │
                 ▼
[Frontend: Portal Ciudadano de Transparencia]
```

- **Pipeline de Datos (ETL):** Orquestación mediante n8n en entornos contenerizados para extraer, estructurar y normalizar datos provenientes de APIs públicas del Estado paraguayo.

- **Motor de Extracción y Estructuración:** Integración de LLMs locales (Llama 3 vía Ollama) para transformar textos regulatorios, actas y pliegos de bases y condiciones en esquemas JSON estrictos y validados.

- **Capa de Persistencia y API:** Modelado relacional robusto con PostgreSQL y ORMs de alta eficiencia (Prisma) para la trazabilidad inmutable de estados financieros de los funcionarios.

## 🗺️ Hoja de Ruta de Implementación (Roadmap)
```text

Fase 1: Construcción Ciudadana  ➔  Fase 2: Proyecto Legal  ➔  Fase 3: Presión Democrática  ➔  Fase 4: Reforma Constitucional  ➔  Fase 5: Despliegue Técnico

```

1. **Fase 1 — Construcción Ciudadana:** Alianzas con universidades, centros de tecnología, juristas y la sociedad civil para el desarrollo del núcleo conceptual.

2. **Fase 2 — Proyecto Legal:** Redacción de anteproyectos de ley, enmiendas constitucionales y especificaciones técnicas de APIs abiertas.

3. **Fase 3 — Presión Democrática:** Recolección digital de firmas y campañas públicas utilizando plataformas digitales de verificación de identidad.

4. **Fase 4 — Congreso y Reformas:** Debate legislativo o convocatoria a Convención Nacional Constituyente para la reestructuración de los artículos pertinentes.

5. **Fase 5 — Auditoría Permanente:** Puesta en marcha de los nodos independientes de auditoría con IA y dashboards de acceso público.

## 💻 Configuración Local y Despliegue
Requisitos Previos
- Docker y Docker Compose
- Node.js (v20 o superior)

### Clonar e Iniciar el Entorno
```bash
# Clonar el repositorio
git clone https://github.com/josepanz/Proyecto-Observatorio-PY.git
cd Proyecto-Observatorio-PY

# Levantar la infraestructura de base (Base de datos, n8n, Ollama)
docker-compose up -d
```

Para visualizar la Landing Page actual del proyecto, podés abrir directamente el archivo index.html en tu navegador o visitar el despliegue en [GitHub Pages/Proyecto Observatorio PY Site](https://josepanz.github.io/Proyecto-Observatorio-PY/).

## ⚖️ Declaración de Principios y Advertencia Legal
Este proyecto es una propuesta de diseño institucional y tecnológico conceptual. Cualquier implementación en el ecosistema legal paraguayo requiere una estricta armonización con la Constitución Nacional, tratados internacionales de Derechos Humanos, leyes de protección de datos personales y, fundamentalmente, la supervisión humana independiente para evitar el tecnocratismo o sesgos algorítmicos. La tecnología debe servir al ciudadano, no gobernar al ser humano.

### 🔬 **Desarrollado de forma abierta por y para ciudadanos.** Las contribuciones orientadas a la optimización del código, arquitectura de datos y marcos de derecho constitucional son bienvenidas mediante Pull Requests.