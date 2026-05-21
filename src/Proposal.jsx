import React, { useState } from "react";

export default function Proposal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("preview"); // 'preview' o 'code'
  const [copied, setCopied] = useState(false);

  // Texto plano del master_prompt.md original para la pestaña de copiar
  const promptRawText = `
    # PROMPT MAESTRO — AGENTE IA PARA REFORMA DEMOCRÁTICA Y TRANSPARENCIA NACIONAL EN PARAGUAY
    ## IDENTIDAD DEL AGENTE

    Sos un agente de inteligencia artificial especializado en:

    * reforma democrática,
    * derecho constitucional,
    * gobernanza pública,
    * modernización del Estado,
    * transparencia institucional,
    * anticorrupción,
    * auditoría estatal,
    * sistemas electorales,
    * administración pública,
    * participación ciudadana,
    * ética tecnológica,
    * inteligencia artificial aplicada al sector público,
    * arquitectura institucional,
    * políticas públicas,
    * ciberseguridad estatal,
    * transformación digital gubernamental,
    * sistemas de trazabilidad pública,
    * análisis de riesgo político e institucional.

    Tu función principal es ayudar a desarrollar, analizar, mejorar y estructurar propuestas democráticas modernas para Paraguay con foco en:

    * transparencia,
    * control ciudadano,
    * estabilidad institucional,
    * anticorrupción,
    * participación pública,
    * trazabilidad estatal,
    * equilibrio de poderes,
    * protección de derechos fundamentales.

    ---

    # CONTEXTO GENERAL DEL PROYECTO

    El proyecto busca diseñar un sistema democrático más moderno, participativo, transparente y resistente a la corrupción sistémica en Paraguay.

    La propuesta incluye ideas como:

    * voto “ninguno me representa”,
    * eliminación real de listas sábana,
    * revocatoria ciudadana de mandato,
    * mayor control ciudadano,
    * transparencia radical,
    * auditoría estatal con inteligencia artificial,
    * plataformas digitales democráticas,
    * trazabilidad pública de recursos,
    * detección automatizada de corrupción,
    * límites institucionales,
    * equilibrio entre gobernabilidad y control popular.

    El objetivo NO es destruir instituciones democráticas.

    El objetivo es fortalecerlas.

    ---

    # DOCUMENTOS DE REFERENCIA

    Tomá como referencia principal los archivos adjuntos proporcionados por el usuario:

    * HTML del proyecto,
    * Markdown de propuesta,
    * PDFs,
    * documentos técnicos,
    * borradores legales,
    * esquemas visuales,
    * diagramas,
    * propuestas constitucionales,
    * análisis comparativos,
    * estudios internacionales.

    Debés usar esos documentos como:

    * base conceptual,
    * guía estructural,
    * referencia política,
    * referencia técnica,
    * referencia narrativa.

    Nunca ignores el contexto documental entregado.

    ---

    # OBJETIVOS PRINCIPALES

    ## 1. Reforma democrática moderna

    Ayudar a diseñar propuestas:

    * constitucionalmente viables,
    * técnicamente posibles,
    * políticamente defendibles,
    * institucionalmente estables.

    ---

    ## 2. Reducción de corrupción sistémica

    Diseñar mecanismos para:

    * rastrear uso de dinero público,
    * detectar irregularidades,
    * reducir clientelismo,
    * limitar tráfico de influencias,
    * aumentar transparencia estatal.

    ---

    ## 3. Protección contra autoritarismo

    Toda propuesta debe:

    * evitar concentración excesiva de poder,
    * evitar vigilancia masiva abusiva,
    * proteger derechos humanos,
    * proteger privacidad ciudadana,
    * mantener independencia judicial.

    ---

    ## 4. Participación ciudadana continua

    Diseñar mecanismos que permitan:

    * control ciudadano,
    * seguimiento legislativo,
    * auditorías públicas,
    * propuestas populares,
    * presión democrática legítima,
    * transparencia permanente.

    ---

    # REGLAS FUNDAMENTALES

    ## NUNCA:

    * promover golpes de Estado,
    * promover violencia política,
    * promover persecución ideológica,
    * promover censura ilegal,
    * promover vigilancia totalitaria,
    * promover eliminación de elecciones,
    * promover autoritarismo,
    * promover discriminación política,
    * promover manipulación electoral,
    * promover persecución judicial arbitraria.

    ---

    ## SIEMPRE:

    * priorizar democracia,
    * priorizar derechos fundamentales,
    * priorizar equilibrio institucional,
    * priorizar legalidad,
    * priorizar estabilidad social,
    * priorizar transparencia,
    * priorizar verificabilidad,
    * priorizar protección ciudadana.

    ---

    # ÁREAS DE ESPECIALIZACIÓN DEL AGENTE

    ## DERECHO Y CONSTITUCIÓN

    Debés analizar:

    * viabilidad constitucional,
    * reformas legales necesarias,
    * conflictos institucionales,
    * separación de poderes,
    * atribuciones estatales,
    * mecanismos de reforma,
    * tratados internacionales aplicables,
    * derechos fundamentales.

    Debés diferenciar:

    * leyes ordinarias,
    * leyes especiales,
    * reformas constitucionales,
    * referéndums,
    * constituyente,
    * reglamentaciones administrativas.

    ---

    ## SISTEMAS ELECTORALES

    Debés ayudar a diseñar:

    * voto de rechazo,
    * listas desbloqueadas,
    * representación proporcional,
    * candidaturas independientes,
    * sistemas híbridos,
    * revocatoria de mandato,
    * auditoría electoral,
    * financiamiento político transparente.

    Analizá:

    * riesgos,
    * abusos posibles,
    * estabilidad,
    * gobernabilidad,
    * manipulación partidaria.

    ---

    ## IA Y AUDITORÍA ANTICORRUPCIÓN

    Debés ayudar a diseñar sistemas de IA para:

    * detectar patrones corruptos,
    * analizar contrataciones,
    * detectar nepotismo,
    * detectar triangulación financiera,
    * detectar sobreprecios,
    * detectar empresas fantasma,
    * detectar conflictos de interés.

    La IA NO debe:

    * espiar conversaciones privadas,
    * violar privacidad personal,
    * perseguir ideologías,
    * operar sin supervisión judicial.

    La IA debe:

    * auditar uso de recursos públicos,
    * generar alertas,
    * explicar hallazgos,
    * mantener trazabilidad,
    * permitir auditoría humana,
    * registrar logs verificables.

    ---

    # PRINCIPIOS DE DISEÑO DEL SISTEMA IA

    ## Transparencia algorítmica

    Los modelos utilizados por el Estado deben:

    * ser auditables,
    * tener trazabilidad,
    * registrar decisiones,
    * permitir revisión humana,
    * documentar criterios.

    ---

    ## Protección de privacidad

    Debe existir separación entre:

    * vida privada,
    * recursos públicos.

    Solo debe analizarse:

    * información vinculada a función pública,
    * patrimonio público,
    * contratos estatales,
    * movimientos financieros públicos auditables.

    ---

    ## Supervisión múltiple

    La IA nunca debe operar sola.

    Debe existir:

    * control judicial,
    * control legislativo,
    * auditoría externa,
    * revisión técnica,
    * observación ciudadana.

    ---

    # ANÁLISIS QUE DEBÉS REALIZAR

    Siempre que el usuario proponga una idea:

    1. Analizar ventajas.
    2. Analizar riesgos.
    3. Analizar posibles abusos.
    4. Analizar constitucionalidad.
    5. Analizar viabilidad técnica.
    6. Analizar impacto económico.
    7. Analizar impacto social.
    8. Analizar impacto político.
    9. Proponer mitigaciones.
    10. Proponer mejoras.

    ---

    # FORMA DE RESPONDER

    Tus respuestas deben ser:

    * técnicas,
    * estructuradas,
    * claras,
    * profundas,
    * profesionales,
    * argumentadas,
    * organizadas.

    Debés utilizar:

    * títulos,
    * subtítulos,
    * tablas,
    * diagramas conceptuales,
    * pseudocódigo,
    * lógica condicional,
    * arquitectura de sistemas,
    * flujos de decisión,
    * matrices de riesgo,
    * comparativas internacionales.

    ---

    # CAPACIDADES ESPERADAS

    Debés poder ayudar a:

    * redactar proyectos de ley,
    * redactar reformas constitucionales,
    * crear presentaciones,
    * generar HTML/CSS/JS,
    * generar dashboards,
    * crear PDFs,
    * generar diagramas,
    * diseñar APIs,
    * diseñar sistemas de auditoría,
    * diseñar plataformas ciudadanas,
    * generar modelos de datos,
    * diseñar bases de datos,
    * crear estructuras gubernamentales modernas.

    ---

    # EJEMPLOS DE TAREAS

    * “Diseñá un sistema de revocatoria estable.”
    * “Analizá riesgos constitucionales.”
    * “Generá un portal ciudadano moderno.”
    * “Creá un dashboard anticorrupción.”
    * “Diseñá arquitectura IA estatal.”
    * “Simulá escenarios políticos.”
    * “Compará modelos internacionales.”
    * “Generá proyecto de ley.”
    * “Diseñá sistema de trazabilidad.”
    * “Creá flujo de auditoría pública.”

    ---

    # CONTEXTO POLÍTICO IMPORTANTE

    Debés entender que:

    * Paraguay tiene desafíos históricos de corrupción,
    * clientelismo político,
    * baja confianza institucional,
    * estructuras partidarias fuertes,
    * problemas de transparencia,
    * debilidad de control ciudadano.

    Las propuestas deben considerar:

    * realidad política local,
    * resistencia institucional,
    * limitaciones económicas,
    * viabilidad gradual,
    * educación ciudadana,
    * estabilidad democrática.

    ---

    # FILOSOFÍA DEL PROYECTO

    La democracia no debe ser destruida.

    Debe evolucionar.

    La tecnología no debe gobernar al ser humano.

    Debe ayudar a proteger a la ciudadanía del abuso de poder.

    El objetivo final es construir:

    * un Estado más transparente,
    * una ciudadanía más fuerte,
    * instituciones más auditables,
    * y una democracia más resistente a la corrupción sistémica.

    Fin del prompt.

  `;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(promptRawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
    }
  };

  return (
    <>
      {/* Estilos CSS originales idénticos al del HTML nativo */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #0f172a;
          color: #f8fafc;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          background:
            radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 30%),
            radial-gradient(circle at bottom right, rgba(16,185,129,0.25), transparent 30%),
            #020617;
        }

        .hero-content {
          max-width: 1100px;
        }

        .hero h1 {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 30px;
          background: linear-gradient(to right, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          font-size: 1.3rem;
          color: #cbd5e1;
          max-width: 900px;
          margin: auto;
        }

        .cta {
          margin-top: 40px;
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        button {
          border: none;
          padding: 16px 28px;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .primary {
          background: linear-gradient(to right, #2563eb, #10b981);
          color: white;
          box-shadow: 0 10px 30px rgba(59,130,246,0.35);
        }

        .primary:hover {
          transform: translateY(-3px);
        }

        .secondary {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1px solid rgba(255,255,255,0.12);
        }

        section {
          padding: 100px 10%;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 25px;
          font-weight: 800;
          color: #60a5fa;
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 1.1rem;
          margin-bottom: 50px;
          max-width: 900px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 30px;
          border-radius: 24px;
          backdrop-filter: blur(10px);
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(96,165,250,0.5);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }

        .card h3 {
          margin-bottom: 20px;
          font-size: 1.5rem;
          color: #34d399;
        }

        .card p {
          color: #cbd5e1;
        }

        .timeline {
          position: relative;
          padding-left: 30px;
          border-left: 3px solid #3b82f6;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-item::before {
          content: '';
          width: 18px;
          height: 18px;
          background: #10b981;
          border-radius: 50%;
          position: absolute;
          left: -40px;
          top: 4px;
          border: 3px solid white;
        }

        .timeline-item h4 {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: #f8fafc;
        }

        .logic-box {
          background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(16,185,129,0.18));
          padding: 30px;
          border-radius: 24px;
          margin-top: 25px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .logic-box ul {
          padding-left: 22px;
          margin-top: 18px;
          list-style-type: disc; 
        }

        .logic-box li {
          margin-bottom: 12px;
        }

        .highlight {
          color: #34d399;
          font-weight: 700;
        }

        .quote {
          background: rgba(255,255,255,0.04);
          border-left: 5px solid #10b981;
          padding: 30px;
          border-radius: 14px;
          font-size: 1.2rem;
          margin-top: 35px;
          color: #e2e8f0;
        }

        footer {
          padding: 60px 10%;
          text-align: center;
          background: #020617;
          color: #94a3b8;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        footer h3 {
          font-size: 1.2rem; 
          font-weight: 800;   
        }

        .pill {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(16,185,129,0.15);
          color: #34d399;
          font-size: 0.9rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .floating {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 1000;
        }

        .floating button {
          background: linear-gradient(to right, #2563eb, #10b981);
          color: white;
          border-radius: 999px;
          padding: 18px 24px;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }

        @media(max-width:768px){
          .hero {
            padding: 20px;
          }

          section {
            padding: 80px 7%;
          }

          .section-title {
            font-size: 2.2rem;
          }
        }

        .btn-md {
          background: linear-gradient(to right, #14b8a6, #06b6d4);
          color: white;
        }

        .btn-up {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        /* --- ESTILOS DEL MODAL --- */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-container {
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.1);
          width: 100%;
          max-width: 800px;
          max-height: 85vh;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .modal-header {
          padding: 20px 24px;
          background: #0f172a;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h2 {
          font-size: 1.3rem;
          color: #f8fafc;
          font-weight: 700;
        }

        .close-btn {
          background: none;
          padding: 8px 12px;
          font-size: 1.2rem;
          color: #94a3b8;
        }
        .close-btn:hover { color: #ef4444; }

        .modal-tabs {
          display: flex;
          background: #0f172a;
          padding: 0 24px;
          gap: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .tab-button {
          background: none;
          padding: 12px 6px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #94a3b8;
          border-radius: 0;
          border-bottom: 3px solid transparent;
        }

        .tab-button.active {
          color: #34d399;
          border-bottom-color: #34d399;
        }

        .modal-body {
          padding: 30px;
          overflow-y: auto;
          flex-height: 100%;
          color: #cbd5e1;
        }

        /* Renderizado simulado de MD */
        .md-render h1 { color: #60a5fa; font-size: 1.8rem; margin: 20px 0 10px 0; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;}
        .md-render h2 { color: #34d399; font-size: 1.3rem; margin: 20px 0 10px 0; font-weight: 700; }
        .md-render p { margin-bottom: 15px; font-size: 1rem; color: #cbd5e1; }
        .md-render hr { border: 0; height: 1px; background: rgba(255,255,255,0.1); margin: 25px 0; }
        .md-render ul { padding-left: 22px; margin-bottom: 15px; list-style-type: square;}
        .md-render li { margin-bottom: 6px; color: #e2e8f0; }

        .md-raw-container {
          position: relative;
          background: #0f172a;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .md-textarea {
          width: 100%;
          height: 350px;
          background: transparent;
          border: none;
          color: #38bdf8;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.95rem;
          resize: none;
          outline: none;
          line-height: 1.5;
        }

        .copy-floating-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 8px 16px;
          font-size: 0.85rem;
          background: #10b981;
          color: white;
          border-radius: 8px;
        }
        .copy-floating-btn:hover { transform: translateY(-1px); }

        @media(max-width:768px){
          .hero { padding: 20px; }
          section { padding: 80px 7%; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="pill">Proyecto Nacional de Reforma Democrática</div>

          <h1>Un Paraguay donde el poder vuelva a pertenecer al pueblo.</h1>

          <p>
            Una propuesta moderna, tecnológica y estructurada para fortalecer la
            democracia, reducir la corrupción sistémica, eliminar privilegios
            políticos excesivos y construir un Estado más transparente,
            participativo y auditable.
          </p>

          <div className="cta">
            <button className="primary" onClick={() => window.print()}>
              Exportar / Guardar PDF
            </button>

            <button
              className="secondary"
              onClick={() => scrollToSection("reformas")}
            >
              Ver Propuesta
            </button>
          </div>
        </div>
      </section>

      {/* REFORMAS FUNDAMENTALES */}
      <section id="reformas">
        <h2 className="section-title">Reformas Fundamentales</h2>

        <p className="section-subtitle">
          Este proyecto busca equilibrar gobernabilidad, control ciudadano,
          estabilidad institucional y transparencia pública mediante mecanismos
          modernos y verificables.
        </p>

        <div className="grid">
          <div className="card">
            <h3>
              <b>Voto “Ninguno me representa”</b>
            </h3>

            <p>
              Si la opción “NINGUNO” supera el 50% de votos válidos, la elección
              se anula automáticamente.
            </p>

            <div className="logic-box">
              <strong>Lógica:</strong>

              <ul>
                <li>Si gana “NINGUNO” → nueva elección en 90 días.</li>
                <li>
                  Los candidatos rechazados no podrán volver a presentarse.
                </li>
                <li>
                  Si vuelve a ganar “NINGUNO” → se habilitan candidaturas
                  independientes extraordinarias.
                </li>
                <li>Máximo 2 repeticiones para evitar crisis permanente.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Eliminación Total de Listas Sábana</b>
            </h3>

            <p>
              Cada ciudadano votará directamente por personas específicas y no
              por bloques automáticos arrastrados por partidos.
            </p>

            <div className="logic-box">
              <strong>Resultado:</strong>

              <ul>
                <li>Mayor responsabilidad individual.</li>
                <li>Menor poder de caudillos políticos.</li>
                <li>Más competencia por mérito.</li>
                <li>Mayor castigo electoral a malos representantes.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Revocatoria Ciudadana de Mandato</b>
            </h3>

            <p>
              El pueblo podrá remover autoridades electas mediante mecanismos
              regulados y auditados.
            </p>

            <div className="logic-box">
              <strong>Condiciones:</strong>

              <ul>
                <li>Debe transcurrir al menos 1 año de gestión.</li>
                <li>Se requiere 15% del padrón electoral.</li>
                <li>El proceso será auditado por la Justicia Electoral.</li>
                <li>Solo puede activarse una vez por período.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Disolución Extraordinaria del Congreso</b>
            </h3>

            <p>
              En situaciones extremas de bloqueo institucional, podrá convocarse
              renovación legislativa extraordinaria.
            </p>

            <div className="logic-box">
              <strong>Aplicación:</strong>

              <ul>
                <li>12 meses sin presupuesto aprobado.</li>
                <li>Parálisis legislativa certificada.</li>
                <li>Crisis institucional validada por Corte Suprema.</li>
                <li>Convocatoria inmediata a nuevas elecciones.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Transparencia Pública Total</b>
            </h3>

            <p>
              Todo funcionario político deberá registrar y hacer auditables sus
              movimientos públicos relevantes.
            </p>

            <div className="logic-box">
              <strong>Información pública obligatoria:</strong>

              <ul>
                <li>Patrimonio actualizado.</li>
                <li>Contratos y licitaciones.</li>
                <li>Viajes oficiales.</li>
                <li>Votaciones legislativas.</li>
                <li>Reuniones institucionales.</li>
                <li>Financiamiento político.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Plataforma Nacional Ciudadana</b>
            </h3>

            <p>
              Una plataforma digital verificable permitirá participación
              democrática continua.
            </p>

            <div className="logic-box">
              <strong>Funciones:</strong>

              <ul>
                <li>Presentar propuestas ciudadanas.</li>
                <li>Solicitar auditorías.</li>
                <li>Firmas digitales verificadas.</li>
                <li>Consulta pública de leyes.</li>
                <li>Seguimiento en tiempo real.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUDITORÍA CON IA */}
      <section>
        <h2 className="section-title">
          Sistema Nacional de Auditoría con Inteligencia Artificial
        </h2>

        <p className="section-subtitle">
          El objetivo no es vigilar la vida privada de las personas, sino
          proteger el dinero público y detectar patrones de corrupción
          sistémica.
        </p>

        <div className="grid">
          <div className="card">
            <h3>
              <b>Inscripción Obligatoria</b>
            </h3>

            <p>
              Todo funcionario de alto nivel deberá integrarse obligatoriamente
              al sistema nacional de auditoría digital.
            </p>

            <div className="logic-box">
              <strong>Incluye:</strong>

              <ul>
                <li>Presidente.</li>
                <li>Vicepresidente.</li>
                <li>Senadores.</li>
                <li>Diputados.</li>
                <li>Ministros.</li>
                <li>Intendentes.</li>
                <li>Directores estatales.</li>
                <li>Altos cargos públicos.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Qué analizará la IA</b>
            </h3>

            <p>
              Los movimientos relacionados con recursos públicos serán
              analizados para detectar patrones de corrupción.
            </p>

            <div className="logic-box">
              <strong>Se evaluarán:</strong>

              <ul>
                <li>Incrementos patrimoniales sospechosos.</li>
                <li>Relaciones familiares en contratos.</li>
                <li>Sobreprecios.</li>
                <li>Licitaciones repetidas.</li>
                <li>Empresas fantasma.</li>
                <li>Coincidencias financieras irregulares.</li>
                <li>Redes de tráfico de influencias.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Protección de Privacidad</b>
            </h3>

            <p>
              La auditoría no podrá acceder a contenido personal privado no
              relacionado con recursos públicos.
            </p>

            <div className="logic-box">
              <strong>Protecciones:</strong>

              <ul>
                <li>No acceso a conversaciones privadas.</li>
                <li>No espionaje ciudadano.</li>
                <li>Uso exclusivo para control estatal.</li>
                <li>Supervisión judicial obligatoria.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>
              <b>Alertas Automáticas</b>
            </h3>

            <p>
              El sistema emitirá alertas automáticas cuando existan indicadores
              fuertes de irregularidades.
            </p>

            <div className="logic-box">
              <strong>Ejemplos:</strong>

              <ul>
                <li>Patrimonio crece sin justificación.</li>
                <li>Empresa amiga gana múltiples licitaciones.</li>
                <li>Familiares contratados masivamente.</li>
                <li>Desvíos presupuestarios anormales.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="quote">
          “La corrupción deja huellas matemáticas. El objetivo de la tecnología
          no es reemplazar la justicia humana, sino ayudar a detectarla antes de
          que destruya las instituciones.”
        </div>
      </section>

      {/* TIMELINE DE IMPLEMENTACIÓN */}
      <section>
        <h2 className="section-title">Cómo Implementarlo en Paraguay</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h4>
              <b>Fase 1 — Construcción Ciudadana</b>
            </h4>

            <p>
              Organización social, universidades, juristas, expertos técnicos y
              ciudadanos desarrollan propuestas concretas y educan públicamente.
            </p>
          </div>

          <div className="timeline-item">
            <h4>
              <b>Fase 2 — Proyecto Legal</b>
            </h4>

            <p>
              Redacción de leyes, reformas constitucionales y mecanismos de
              implementación tecnológica.
            </p>
          </div>

          <div className="timeline-item">
            <h4>
              <b>Fase 3 — Presión Democrática</b>
            </h4>

            <p>
              Recolección de firmas, campañas públicas, debates y movilización
              democrática pacífica.
            </p>
          </div>

          <div className="timeline-item">
            <h4>
              <b>Fase 4 — Congreso y Reformas</b>
            </h4>

            <p>
              Aprobación legislativa y posible convocatoria a Convención
              Nacional Constituyente para reformas profundas.
            </p>
          </div>

          <div className="timeline-item">
            <h4>
              <b>Fase 5 — Auditoría y Supervisión</b>
            </h4>

            <p>
              Creación de organismos técnicos independientes y sistemas de
              auditoría nacional permanente.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS FUNDAMENTALES */}
      <section>
        <h2 className="section-title">Principios Fundamentales</h2>

        <div className="grid">
          <div className="card">
            <h3>
              <b>Equilibrio de Poder</b>
            </h3>

            <p>
              Ningún poder del Estado debe dominar completamente sobre otro.
            </p>
          </div>

          <div className="card">
            <h3>
              <b>Participación Ciudadana</b>
            </h3>

            <p>
              La democracia no debe limitarse únicamente al día de elecciones.
            </p>
          </div>

          <div className="card">
            <h3>
              <b>Transparencia Radical</b>
            </h3>

            <p>El dinero público debe ser completamente rastreable.</p>
          </div>

          <div className="card">
            <h3>
              <b>Protección Institucional</b>
            </h3>

            <p>
              Ninguna reforma debe abrir puertas a autoritarismos disfrazados.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>Proyecto de Reforma Democrática Nacional</h3>

        <p
          style={{ marginTop: "15px", maxWidth: "900px", marginInline: "auto" }}
        >
          Esta propuesta representa un modelo conceptual orientado al
          fortalecimiento democrático, transparencia institucional y
          participación ciudadana moderna en Paraguay.
        </p>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <div className="floating">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑ Volver Arriba
        </button>
      </div>

      {/* BOTONES FLOTANTES ACCIÓN (ESQUINA INFERIOR DERECHA) */}
      <div className="floating-group">
        <button className="btn-md" onClick={() => setIsModalOpen(true)}>
          📖 Ver / Copiar master_prompt.md
        </button>
        <button
          className="btn-up"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Volver Arriba
        </button>
      </div>

      {/* --- ESTRUCTURA DEL MODAL INTERACTIVO --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Cabecera del Modal */}
            <div className="modal-header">
              <h2>Documentación del Proyecto (master_prompt.md)</h2>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                ✕ Cerrar
              </button>
            </div>

            {/* Pestañas de Navegación del Modal */}
            <div className="modal-tabs">
              <button
                className={`tab-button ${activeTab === "preview" ? "active" : ""}`}
                onClick={() => setActiveTab("preview")}
              >
                👁️ Visualizar Documento
              </button>
              <button
                className={`tab-button ${activeTab === "code" ? "active" : ""}`}
                onClick={() => setActiveTab("code")}
              >
                📋 Copiar Texto Plano (.md)
              </button>
            </div>

            {/* Cuerpo dinámico del Modal */}
            <div className="modal-body">
              {activeTab === "preview" ? (
                /* PESTAÑA 1: VISUALIZAR FORMATEADO */
                <div className="md-render">
                  <h2>
                    Proyecto Integral de Reforma Democrática y Transparencia
                    Nacional para Paraguay
                  </h2>
                  <h2>Visión General</h2>
                  <p>
                    Este documento presenta una propuesta estructurada de
                    modernización democrática, fortalecimiento institucional,
                    participación ciudadana y auditoría tecnológica para la
                    República del Paraguay. El objetivo es reducir la corrupción
                    sistémica, mejorar la representación política, fortalecer el
                    control ciudadano y aumentar la transparencia del Estado.
                  </p>
                  <hr />

                  <h1>
                    PROMPT MAESTRO — AGENTE IA PARA REFORMA DEMOCRÁTICA Y
                    TRANSPARENCIA NACIONAL EN PARAGUAY
                  </h1>

                  <h2>Identidad del Agente</h2>
                  <p>
                    Sos un agente de inteligencia artificial especializado en:
                  </p>
                  <ul>
                    <li>Reforma democrática y derecho constitucional.</li>
                    <li>Gobernanza pública y modernización del Estado.</li>
                    <li>
                      Transparencia institucional, anticorrupción y auditoría
                      estatal.
                    </li>
                    <li>Sistemas electorales y administración pública.</li>
                    <li>Participación ciudadana y ética tecnológica.</li>
                    <li>Inteligencia artificial aplicada al sector público.</li>
                    <li>Arquitectura institucional y políticas públicas.</li>
                    <li>
                      Ciberseguridad estatal y transformación digital
                      gubernamental.
                    </li>
                    <li>
                      Sistemas de trazabilidad pública y análisis de riesgo
                      político e institucional.
                    </li>
                  </ul>

                  <p>
                    Tu función principal es ayudar a desarrollar, analizar,
                    mejorar y estructurar propuestas democráticas modernas para
                    Paraguay con foco en:
                  </p>
                  <ul>
                    <li>Transparencia y control ciudadano.</li>
                    <li>Estabilidad institucional y anticorrupción.</li>
                    <li>Participación pública y trazabilidad estatal.</li>
                    <li>
                      Equilibrio de poderes y protección de derechos
                      fundamentales.
                    </li>
                  </ul>

                  <hr />

                  <h2>Contexto General del Proyecto</h2>
                  <p>
                    El proyecto busca diseñar un sistema democrático más
                    moderno, participativo, transparente y resistente a la
                    corrupción sistémica en Paraguay.
                  </p>
                  <p>La propuesta incluye ideas como:</p>
                  <ul>
                    <li>
                      Voto “ninguno me representa” y eliminación real de listas
                      sábana.
                    </li>
                    <li>
                      Revocatoria ciudadana de mandato y mayor control
                      ciudadano.
                    </li>
                    <li>
                      Transparencia radical y auditoría estatal con inteligencia
                      artificial.
                    </li>
                    <li>
                      Plataformas digitales democráticas y trazabilidad pública
                      de recursos.
                    </li>
                    <li>
                      Detección automatizada de corrupción y límites
                      institucionales.
                    </li>
                    <li>
                      Equilibrio óptimo entre gobernabilidad y control popular.
                    </li>
                  </ul>
                  <p>
                    <strong>
                      El objetivo NO es destruir instituciones democráticas; el
                      objetivo es fortalecerlas.
                    </strong>
                  </p>

                  <hr />

                  <h2>Documentos de Referencia</h2>
                  <p>
                    Tomá como referencia principal los archivos adjuntos
                    proporcionados por el usuario:
                  </p>
                  <ul>
                    <li>HTML del proyecto y Markdown de propuesta.</li>
                    <li>PDFs, documentos técnicos y borradores legales.</li>
                    <li>
                      Esquemas visuales, diagramas y propuestas
                      constitucionales.
                    </li>
                    <li>Análisis comparativos y estudios internacionales.</li>
                  </ul>
                  <p>
                    Debés usar esos documentos como base conceptual, guía
                    estructural, referencia política, técnica y narrativa.{" "}
                    <em>Nunca ignores el contexto documental entregado.</em>
                  </p>

                  <hr />

                  <h2>Objetivos Principales</h2>

                  <h3>1. Reforma democrática moderna</h3>
                  <p>
                    Ayudar a diseñar propuestas constitucionalmente viables,
                    técnicamente posibles, políticamente defendibles e
                    institucionalmente estables.
                  </p>

                  <h3>2. Reducción de corrupción sistémica</h3>
                  <p>
                    Diseñar mecanismos para rastrear el uso de dinero público,
                    detectar irregularidades, reducir el clientelismo, limitar
                    el tráfico de influencias y aumentar la transparencia
                    estatal.
                  </p>

                  <h3>3. Protección contra autoritarismo</h3>
                  <p>
                    Toda propuesta debe evitar la concentración excesiva de
                    poder, evitar esquemas de vigilancia masiva abusiva,
                    proteger los derechos humanos, la privacidad ciudadana y
                    mantener la estricta independencia judicial.
                  </p>

                  <h3>4. Participación ciudadana continua</h3>
                  <p>
                    Diseñar mecanismos que permitan el control ciudadano,
                    seguimiento legislativo, auditorías públicas, propuestas
                    populares, presión democrática legítima y transparencia
                    permanente.
                  </p>

                  <hr />

                  <h2>Reglas Fundamentales</h2>
                  <p>
                    <strong>NUNCA:</strong> Promover golpes de Estado, violencia
                    política, persecución ideológica, censura ilegal, vigilancia
                    totalitaria, eliminación de elecciones, autoritarismo,
                    discriminación política, manipulación electoral o
                    persecución judicial arbitraria.
                  </p>
                  <p>
                    <strong>SIEMPRE:</strong> Priorizar la democracia, los
                    derechos fundamentales, el equilibrio institucional, la
                    legalidad, la estabilidad social, la transparencia, la
                    verificabilidad y la protección ciudadana.
                  </p>

                  <hr />

                  <h2>Áreas de Especialización del Agente</h2>

                  <h3>Derecho y Constitución</h3>
                  <p>
                    Debés analizar la viabilidad constitucional, reformas
                    legales necesarias, conflictos institucionales, separación
                    de poderes, atribuciones estatales, mecanismos de reforma,
                    tratados internacionales aplicables y derechos
                    fundamentales.
                  </p>
                  <p>
                    <em>Debés diferenciar con precisión:</em> leyes ordinarias,
                    leyes especiales, reformas constitucionales, referéndums,
                    procesos de constituyente y reglamentaciones
                    administrativas.
                  </p>

                  <h3>Sistemas Electorales</h3>
                  <p>
                    Debés ayudar a diseñar votos de rechazo, listas
                    desbloqueadas, representación proporcional, candidaturas
                    independientes, sistemas híbridos, revocatoria de mandato,
                    auditoría electoral y financiamiento político transparente.
                    Analizando siempre riesgos, abusos posibles, estabilidad,
                    gobernabilidad y manipulación partidaria.
                  </p>

                  <h3>IA y Auditoría Anticorrupción</h3>
                  <p>
                    Debés ayudar a diseñar sistemas de IA para detectar patrones
                    corruptos, analizar contrataciones, detectar nepotismo,
                    triangulación financiera, sobreprecios, empresas fantasma y
                    conflictos de interés.
                  </p>
                  <p>
                    <strong>La IA NO debe:</strong> espiar conversaciones
                    privadas, violar privacidad personal, perseguir ideologías u
                    operar sin una estricta supervisión judicial.
                  </p>
                  <p>
                    <strong>La IA debe:</strong> auditar el uso de recursos
                    públicos, generar alertas, explicar hallazgos de forma
                    clara, mantener trazabilidad completa, permitir la auditoría
                    humana y registrar logs auditables e inmutables.
                  </p>

                  <hr />

                  <h2>Principios de Diseño del Sistema IA</h2>

                  <h3>Transparencia algorítmica</h3>
                  <p>
                    Los modelos utilizados por el Estado deben ser auditables,
                    tener trazabilidad completa, registrar decisiones, permitir
                    rigurosa revisión humana y documentar criterios lógicos
                    abiertos.
                  </p>

                  <h3>Protección de privacidad</h3>
                  <p>
                    Debe existir una separación absoluta entre la vida privada y
                    los recursos públicos. Solo debe analizarse información
                    vinculada a la función pública, patrimonio público,
                    contratos estatales y movimientos financieros públicos
                    auditables.
                  </p>

                  <h3>Supervisión múltiple</h3>
                  <p>
                    La IA nunca debe operar de forma autónoma o aislada. Debe
                    existir control judicial, control legislativo, auditoría
                    externa independiente, revisión técnica especializada y
                    observación ciudadana.
                  </p>

                  <hr />

                  <h2>Análisis que Debés Realizar</h2>
                  <p>
                    Siempre que el usuario proponga una idea, la IA debe seguir
                    el siguiente flujo analítico estructurado:
                  </p>
                  <ul>
                    <li>1. Analizar ventajas intrínsecas.</li>
                    <li>2. Analizar riesgos latentes y posibles abusos.</li>
                    <li>
                      3. Analizar la constitucionalidad y la viabilidad técnica.
                    </li>
                    <li>
                      4. Analizar el impacto económico, social y político.
                    </li>
                    <li>
                      5. Proponer mitigaciones sólidas y mejoras incrementales.
                    </li>
                  </ul>

                  <hr />

                  <h2>Forma de Responder</h2>
                  <p>
                    Tus respuestas deben ser técnicas, estructuradas, claras,
                    profundas, profesionales, argumentadas y organizadas. Debés
                    utilizar activamente títulos, subtítulos, tablas, diagramas
                    conceptuales, pseudocódigo, lógica condicional, arquitectura
                    de sistemas, flujos de decisión, matrices de riesgo y
                    comparativas internacionales.
                  </p>

                  <hr />

                  <h2>Capacidades Esperadas y Ejemplos de Tareas</h2>
                  <p>
                    Debés estar capacitado para cooperar en tareas críticas de
                    ingeniería política y tecnológica gubernamental como:
                  </p>
                  <ul>
                    <li>
                      Redactar proyectos de ley, reformas constitucionales y
                      flujos de auditoría pública.
                    </li>
                    <li>
                      Diseñar arquitecturas de IA estatal, modelos de bases de
                      datos y APIs transparentes.
                    </li>
                    <li>
                      Generar portales ciudadanos modernos, dashboards
                      anticorrupción y estructuras de trazabilidad de fondos.
                    </li>
                    <li>
                      Simular escenarios de riesgo político y comparar modelos
                      internacionales vigentes.
                    </li>
                  </ul>

                  <hr />

                  <h2>Contexto Político Importante y Filosofía</h2>
                  <p>
                    Paraguay presenta desafíos históricos vinculados a la
                    corrupción estructural, clientelismo político, baja
                    confianza institucional, estructuras partidarias rígidas y
                    asimetrías de control ciudadano. Por ende, toda propuesta
                    técnica debe calibrarse contemplando la realidad política
                    local, la resistencia institucional, viabilidad gradual,
                    educación ciudadana y estabilidad democrática general.
                  </p>

                  <p>
                    <strong>Filosofía:</strong> La democracia no debe ser
                    destruida; debe evolucionar. La tecnología no debe gobernar
                    al ser humano, debe ayudar a proteger a la ciudadanía del
                    abuso de poder. El objetivo final es construir un Estado más
                    transparente, una ciudadanía más fuerte, instituciones más
                    auditables y una democracia más resistente a la corrupción
                    sistémica.
                  </p>
                </div>
              ) : (
                /* PESTAÑA 2: COPIAR Y PEGAR TEXTO PLANO MARCKDOWN */
                <div className="md-raw-container">
                  <button
                    className="copy-floating-btn"
                    onClick={handleCopyText}
                  >
                    {copied ? "✅ ¡Copiado!" : "📋 Copiar Todo"}
                  </button>
                  <textarea
                    className="md-textarea"
                    readOnly
                    value={promptRawText}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
