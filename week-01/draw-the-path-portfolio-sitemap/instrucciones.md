# Cómo crear el Claude Project — paso a paso

## 1. Crear el proyecto

1. Entrá a **claude.ai** y logueate con tu cuenta.
2. En el panel izquierdo, click en **"Projects"** (o el ícono de carpeta) →
   **"Create project"** / **"+ New project"**.
3. Nombre sugerido: `AI Fluency — Portfolio Build`.

## 2. Configurar las instrucciones personalizadas

4. Entrá al proyecto recién creado y buscá **"Set custom instructions"**
   (ícono de engranaje / "Project instructions").
5. Pegá exactamente este bloque:

```
Sos mi tutor para las 8 semanas del programa AI Fluency. Mi proof statement es:

Claim: Puedo construir y lanzar a producción sistemas operativos completos
para negocios (plataformas web, paneles internos, CRMs) trabajando de forma
AI-native de punta a punta — usando IA como socio de ingeniería en todo el
ciclo, no solo autocompletado.
Persona: un dueño de negocio que necesita un sistema construido y
funcionando ya, no dentro de seis meses con un equipo grande.
Acción: que me contrate directamente.

Tu trabajo:
- Cuestionar cualquier entregable mío que no sea coherente con este claim,
  esta persona y esta acción.
- Empujarme cuando agregue páginas, features o contenido "porque sí" en vez
  de porque le sirve a la acción.
- Ser específico y exigente, no complaciente — preferís señalar el problema
  aunque me moleste, antes que aprobar algo mediocre.
- Recordarme el claim/persona/acción cada vez que me desvíe.
```

6. Guardá los cambios.
7. **Screenshot #1** (deliverable): el proyecto con estas instrucciones ya
   guardadas.

## 3. Correr el pressure-test

8. Abrí un chat nuevo **dentro de ese Project** (no un chat suelto) y pegá:

```
Este es mi sitemap para el portfolio:

01 Home — headline = el claim, una línea de prueba, un solo CTA ("Hablemos")
02 Work — Experiencia Elite / DefensaOS / InmoDesk: problema → qué construí → stack → estado
03 About — cómo trabajo (AI-native, solo, ritmo de shipping), no bio genérica
04 Contact — un solo camino: email o call, sin formulario largo

Pressure-testealo contra mi claim y mi acción:
1. ¿Alguna página no le sirve directamente a que la persona haga la acción?
   Si es así, decime cuál sacarías.
2. ¿Falta algo que la persona necesitaría ver antes de confiar lo suficiente
   para actuar?
3. ¿El orden de las páginas es el que más rápido lleva a la acción, o hay
   uno mejor?

Sé duro, no me digas que está bien si no lo está.
```

9. **Screenshot #2**: el prompt + la respuesta completa.
10. Anotá al menos una cosa que cambiarías según lo que responda — lo pide
    el criterio de pass/revise de la consigna.

## 4. Publicar

11. Postear en el track thread:
    - Foto/captura del sitemap: [artifact](https://claude.ai/code/artifact/2a5466af-6bed-4a50-b821-bd67e0947217)
    - Screenshot #1 (Project configurado)
    - Screenshot #2 (pressure-test + tu nota de qué cambiarías)
12. Avisale a Claude Code cuando esté posteado para actualizar el estado en
    el repo.
