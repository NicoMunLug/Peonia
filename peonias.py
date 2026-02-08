import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.lines as lines
import random
import math
from IPython.display import Image, display
import io

fig, ax = plt.subplots(figsize=(8, 6))

ax.set_facecolor("#FFFDF5")

ax.text(
    0, 120,
    "Te quiero mi niña,\n espero que estas flores te hagan recordar\n siempre lo mucho que vales. \n\n\n",
    fontsize=16,
    color="#7A4E8A",
    ha="center",
    va="center",
    fontstyle="italic",
    linespacing=1.4,
    zorder=10
)

ax.set_xlim(-400, 400)
ax.set_ylim(-300, 300)
ax.set_aspect('equal', adjustable='box')
ax.axis('off')

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

def draw_peony(ax, x, y, size, main_color, accent_color):
    peony_base_zorder = 3

    for _ in range(60):
        petal_size_factor = random.uniform(0.6, 1.0)
        current_radius = size * petal_size_factor
        offset_distance = random.uniform(size * 0.15, size * 0.5)
        offset_angle = random.uniform(0, 2 * math.pi)

        px = x + offset_distance * math.cos(offset_angle)
        py = y + offset_distance * math.sin(offset_angle)
        color_choice = random.choices([main_color, accent_color], weights=[0.8, 0.2])[0]
        draw_petal(ax, px, py, current_radius, color_choice, peony_base_zorder)

    for _ in range(50):
        petal_size_factor = random.uniform(0.3, 0.7)
        current_radius = size * petal_size_factor
        offset_distance = random.uniform(0, size * 0.18)
        offset_angle = random.uniform(0, 2 * math.pi)

        px = x + offset_distance * math.cos(offset_angle)
        py = y + offset_distance * math.sin(offset_angle)
        color_choice = random.choices([accent_color, main_color], weights=[0.7, 0.3])[0]
        draw_petal(ax, px, py, current_radius, color_choice, peony_base_zorder + 0.05)

    center_radius = size * random.uniform(0.08, 0.15)
    center_color = random.choice([accent_color, main_color])
    ax.add_patch(
        patches.Circle((x, y), center_radius, color=center_color, zorder=peony_base_zorder + 0.1)
    )

def draw_stem(ax, x, y_start, y_end):
    stem = lines.Line2D([x, x], [y_start, y_end], color="darkgreen", linewidth=5, zorder=1)
    ax.add_line(stem)

def draw_leaf(ax, x, y, size, attach_angle=None):
    leaf_width = size * random.uniform(1.2, 1.8)
    leaf_height = size * random.uniform(0.6, 0.9)
    angle = random.randint(30, 150) if attach_angle is None else attach_angle
    leaf = patches.Ellipse(
        (x, y),
        leaf_width,
        leaf_height,
        angle=angle,
        color="forestgreen",
        edgecolor="green",
        linewidth=1.5,
        fill=True,
        zorder=2
    )
    ax.add_patch(leaf)

stem_y_start = -50
stem_y_end = -250

draw_stem(ax, 0, stem_y_start, stem_y_end)
draw_stem(ax, -40, stem_y_start - 20, stem_y_end + 30)
draw_stem(ax, 40, stem_y_start - 10, stem_y_end + 20)

draw_leaf(ax, -20, -120, 25, attach_angle=100)
draw_leaf(ax, 20, -180, 30, attach_angle=70)

draw_leaf(ax, -70, -150, 30, attach_angle=120)
draw_leaf(ax, -20, -200, 20, attach_angle=60)

draw_leaf(ax, 70, -160, 28, attach_angle=60)
draw_leaf(ax, 20, -210, 22, attach_angle=110)

pink_shades = ["#FFD1DC", "#FFB6C1", "#FF69B4", "#FF99AA", "#FFE4E1"]
purple_shades = ["#DDA0DD", "#EE82EE", "#BA55D3"]

flower_positions = [
    (0, 0, 60),
    (-80, 30, 50), (80, 20, 55),
    (-100, 0, 45), (100, -10, 48),
    (50, -25, 47), (-50, -35, 43),
    (-40, -50, 52), (40, -60, 50),
    (0, -100, 40)
]

for x, y, size in flower_positions:
    colors = pink_shades + purple_shades
    draw_peony(ax, x, y, size, random.choice(colors), random.choice(colors))

ax.text(
    0, -260,
    "\n\n\n\n\n Estas nunca dejarán de existir, y siempre que te sientas mal\n"
    "vas a poder venir aquí a verlas y recordar lo hermosa \n que eres, así como lo son estas peonías",
    fontsize=16,
    color="#7A4E8A",
    ha="center",
    va="center",
    fontstyle="italic",
    linespacing=1.4,
    zorder=10
)

buf = io.BytesIO()
plt.savefig(buf, format='png', bbox_inches='tight', dpi=100)
buf.seek(0)
display(Image(buf.read()))
plt.close(fig)
