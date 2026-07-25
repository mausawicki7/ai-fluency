Details

Phase: Foundations · Estimated hours: 4

Why it matters: "Used AI to build it" is not a skill; directing AI with specs, verification, and review is. This drill makes the difference visible in your own work.

Brief:

    Pick one small capstone-relevant feature (a settings form with validation works well). Build it twice.
    Round one: a single vague prompt, accept the output, save to a branch.
    Round two: a precise prompt with file references, constraints, example behavior, and a verification step ("write it, then write tests and run them"). Use plan mode or an equivalent explore-plan-code loop. Second branch.
    Diff the branches and write WORKFLOW.md (300-500 words): correctness, accessibility, edge cases, review effort.
    Update your CLAUDE.md or rules file with at least three project rules you learned.
    Optional: generate the same UI in v0 and compare.

Deliverable: Both branches pushed plus WORKFLOW.md.

Evaluation criteria:

    Both branches exist and run
    Comparison cites specific diffs, not vibes
    Rules file updated with concrete, project-specific rules
    Write-up names at least one AI mistake you caught

Linked resources:

    Claude Code best practices (opens in a new tab) : the verification-loop and prompting patterns this drill is built on.
    v0 docs (opens in a new tab) (account required): where UI generation fits in a 2026 workflow.
    Cursor docs (opens in a new tab) (account required): rules, agent mode, and plan workflows if Cursor is your tool.

Mentor tips

    The most common way this drill fails: your "vague" round-one prompt is accidentally decent because you've already been prompting carefully for weeks. Make round one honestly lazy — one sentence, no context — or the diff won't teach you anything.
    Keep the two rounds independent. If round two runs in the same session as round one, the model carries context over and contaminates the comparison. Fresh session, fresh branch.
    When you diff, look beyond the code: compare how long each round took including your review and fixing time. Round two often feels slower and is faster end-to-end — that's the whole lesson, and it's worth a line in WORKFLOW.md .
    Good CLAUDE.md rules are testable and project-specific ("forms use react-hook-form + zod, never uncontrolled inputs"), not vibes ("write clean code"). If a rule couldn't fail a review, it isn't a rule.

Stretch goals (optional)

    Run round two's exact prompt against a second tool or model and add a paragraph to WORKFLOW.md on where they diverged.
    Turn your three rules into a reusable prompt preamble and use it in every later assignment — then note in FE-12's case study whether it held up.

Extra resources

    Anthropic's prompt engineering overview · https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview (opens in a new tab) — the vocabulary for what you're doing in round two (constraints, examples, verification).

Connects to

    Everything after this card: the workflow you write down here is the one you're expected to use in FE-06 through FE-08 and the capstone.
