import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.lines as lines
import random
import math
from IPython.display import Image, display, HTML
import io
import matplotlib.animation as animation

# 1. Increase the animation embedding limit
plt.rcParams['animation.embed_limit'] = 100 # MB

# 2. Data structures
animated_texts = [
    {
        "x": 0,
        "y": 120,
        "text_string": "Te quiero mi niña,\n espero que estas flores te hagan recordar\n siempre lo mucho que vales. \n\n\n",
        "fontsize": 16,
        "color": "#7A4E8A",
        "ha": "center",
        "va": "center",
        "fontstyle": "italic",
        "linespacing": 1.4,
        "zorder": 10
    },
    {
        "x": 0,
        "y": -260,
        "text_string": "\n\n\n\n Estas nunca dejarán de existir, y siempre que te sientas mal\nvas a poder venir aquí a verlas y recordar lo hermosa \n que eres, así como lo son estas peonías",
        "fontsize": 16,
        "color": "#7A4E8A",
        "ha": "center",
        "va": "center",
        "fontstyle": "italic",
        "linespacing": 1.4,
        "zorder": 10
    }
]

stem_y_start = -50
stem_y_end = -250
animated_stems = [
    {"x": 0, "y_start": stem_y_start, "y_end": stem_y_end},
    {"x": -40, "y_start": stem_y_start - 20, "y_end": stem_y_end + 30},
    {"x": 40, "y_start": stem_y_start - 10, "y_end": stem_y_end + 20}
]

animated_leaves = [
    {"x": -20, "y": -120, "size": 25, "attach_angle": 100},
    {"x": 20, "y": -180, "size": 30, "attach_angle": 70},
    {"x": -70, "y": -150, "size": 30, "attach_angle": 120},
    {"x": -20, "y": -200, "size": 20, "attach_angle": 60},
    {"x": 70, "y": -160, "size": 28, "attach_angle": 60},
    {"x": 20, "y": -210, "size": 22, "attach_angle": 110}
]

pink_shades = ["#FFD1DC", "#FFB6C1", "#FF69B4", "#FF99AA", "#FFE4E1"]
purple_shades = ["#DDA0DD", "#EE82EE", "#BA55D3"]
all_flower_colors = pink_shades + purple_shades

flower_positions = [
    (0, 0, 60),
    (-80, 30, 50), (80, 20, 55),
    (-100, 0, 45), (100, -10, 48),
    (50, -25, 47), (-50, -35, 43),
    (-40, -50, 52), (40, -60, 50),
    (0, -100, 40)
]

animated_flowers = []
# Using a fixed seed for reproducibility of random choices for flowers
random.seed(42)
for x, y, size in flower_positions:
    main_color = random.choice(all_flower_colors)
    accent_color = random.choice(all_flower_colors)
    animated_flowers.append({
        "x": x,
        "y": y,
        "size": size,
        "main_color": main_color,
        "accent_color": accent_color
    })
# Reset seed for general randomness if needed later, or ensure this block is self-contained
random.seed()

# 3. Helper functions for progressive drawing
def draw_petal(ax, center_x, center_y, radius, color, zorder):
    ellipse_width = radius * random.uniform(1.0, 1.3)
    ellipse_height = radius * random.uniform(0.7, 1.1)
    angle = random.randint(0, 360)
    petal = patches.Ellipse(
        (center_x, center_y),
        ellipse_width,
        ellipse_height,
        angle=angle,
        color=color,
        alpha=0.7,
        fill=True,
        zorder=zorder
    )
    ax.add_patch(petal)

def draw_text_progressive(ax, text_data, chars_to_show):
    full_text = text_data["text_string"]
    displayed_text = full_text[:chars_to_show]
    ax.text(
        text_data["x"], text_data["y"],
        displayed_text,
        fontsize=text_data["fontsize"],
        color=text_data["color"],
        ha=text_data["ha"],
        va=text_data["va"],
        fontstyle=text_data["fontstyle"],
        linespacing=text_data["linespacing"],
        zorder=text_data["zorder"]
    )

def draw_stem_progressive(ax, stem_data, progress):
    x = stem_data["x"]
    y_start = stem_data["y_start"]
    y_end = stem_data["y_end"]

    current_y_end = y_start + (y_end - y_start) * progress

    stem = lines.Line2D([x, x], [y_start, current_y_end], color="darkgreen", linewidth=5, zorder=1)
    ax.add_line(stem)

def draw_leaf_progressive(ax, leaf_data, progress):
    x = leaf_data["x"]
    y = leaf_data["y"]
    size = leaf_data["size"]
    attach_angle = leaf_data["attach_angle"]

    leaf_width = size * random.uniform(1.2, 1.8) * progress
    leaf_height = size * random.uniform(0.6, 0.9) * progress

    leaf = patches.Ellipse(
        (x, y),
        leaf_width,
        leaf_height,
        angle=attach_angle,
        facecolor="forestgreen", # Changed 'color' to 'facecolor' to resolve warning
        edgecolor="green",
        linewidth=1.5 * progress,
        fill=True,
        zorder=2
    )
    ax.add_patch(leaf)

def draw_peony_progressive(ax, flower_data, progress):
    x = flower_data["x"]
    y = flower_data["y"]
    size = flower_data["size"]
    main_color = flower_data["main_color"]
    accent_color = flower_data["accent_color"]
    peony_base_zorder = 3

    num_petals_layer1 = int(60 * progress)
    for _ in range(num_petals_layer1):
        petal_size_factor = random.uniform(0.6, 1.0)
        current_radius = size * petal_size_factor
        offset_distance = random.uniform(size * 0.15, size * 0.5)
        offset_angle = random.uniform(0, 2 * math.pi)

        px = x + offset_distance * math.cos(offset_angle)
        py = y + offset_distance * math.sin(offset_angle)
        color_choice = random.choices([main_color, accent_color], weights=[0.8, 0.2])[0]
        draw_petal(ax, px, py, current_radius, color_choice, peony_base_zorder)

    num_petals_layer2 = int(50 * progress)
    for _ in range(num_petals_layer2):
        petal_size_factor = random.uniform(0.3, 0.7)
        current_radius = size * petal_size_factor
        offset_distance = random.uniform(0, size * 0.18)
        offset_angle = random.uniform(0, 2 * math.pi)

        px = x + offset_distance * math.cos(offset_angle)
        py = y + offset_distance * math.sin(offset_angle)
        color_choice = random.choices([accent_color, main_color], weights=[0.7, 0.3])[0]
        draw_petal(ax, px, py, current_radius, color_choice, peony_base_zorder + 0.05)

    if progress > 0.5:
        center_radius = size * random.uniform(0.08, 0.15) * (progress - 0.5) * 2
        center_color = random.choice([accent_color, main_color])
        ax.add_patch(
            patches.Circle((x, y), center_radius, color=center_color, zorder=peony_base_zorder + 0.1)
        )

# 4. Create a Matplotlib figure and an Axes object (global for update function)
fig, ax = plt.subplots(figsize=(8, 6))

# 5. Define init function
def init():
    ax.clear() # Clear the current axes

    # Re-apply base plot settings
    ax.set_facecolor("#FFFDF5")
    ax.set_xlim(-400, 400)
    ax.set_ylim(-300, 300)
    ax.set_aspect('equal', adjustable='box')
    ax.axis('off')
    return []

# 6. Define update function
def update(frame):
    ax.clear() # Clear the current axes

    # Re-apply base plot settings
    ax.set_facecolor("#FFFDF5")
    ax.set_xlim(-400, 400)
    ax.set_ylim(-300, 300)
    ax.set_aspect('equal', adjustable='box')
    ax.axis('off')

    # Define total frames and allocate ranges
    total_animation_frames = 300
    frames_per_stage = total_animation_frames // 4 # Roughly equal stages

    text_frames_start, text_frames_end = 0, frames_per_stage - 1
    stem_frames_start, stem_frames_end = frames_per_stage, 2 * frames_per_stage - 1
    leaf_frames_start, leaf_frames_end = 2 * frames_per_stage, 3 * frames_per_stage - 1
    flower_frames_start, flower_frames_end = 3 * frames_per_stage, total_animation_frames - 1

    # Calculate progress for each stage
    text_progress = max(0.0, min(1.0, (frame - text_frames_start) / (text_frames_end - text_frames_start + 1e-9)))
    stem_progress = max(0.0, min(1.0, (frame - stem_frames_start) / (stem_frames_end - stem_frames_start + 1e-9)))
    leaf_progress = max(0.0, min(1.0, (frame - leaf_frames_start) / (leaf_frames_end - leaf_frames_start + 1e-9)))
    flower_progress = max(0.0, min(1.0, (frame - flower_frames_start) / (flower_frames_end - flower_frames_start + 1e-9)))

    # Draw text progressively
    if text_progress > 0:
        for text_data in animated_texts:
            # Calculate total visible characters for each text string
            total_chars_in_string = len(text_data["text_string"])
            chars_to_show_for_current_text = int(total_chars_in_string * text_progress)
            draw_text_progressive(ax, text_data, chars_to_show_for_current_text)

    # Draw stems progressively
    if stem_progress > 0:
        for stem_data in animated_stems:
            draw_stem_progressive(ax, stem_data, stem_progress)

    # Draw leaves progressively
    if leaf_progress > 0:
        for leaf_data in animated_leaves:
            draw_leaf_progressive(ax, leaf_data, leaf_progress)

    # Draw flowers progressively
    if flower_progress > 0:
        num_flowers_to_show = int(len(animated_flowers) * flower_progress)
        for i in range(num_flowers_to_show):
            draw_peony_progressive(ax, animated_flowers[i], flower_progress)

    # Return a list of artists that were modified or added
    return ax.patches + ax.lines + ax.texts # Include ax.texts for blitting functionality


# 7. Create the animation
total_animation_frames = 300
anim = animation.FuncAnimation(fig, update, frames=total_animation_frames, init_func=init, interval=50, blit=True)

# 8. Display the animation
print("Generating animation. This might take a moment...")
display(HTML(anim.to_jshtml()))

# 9. Close the figure to prevent it from displaying as a static plot
plt.close(fig)