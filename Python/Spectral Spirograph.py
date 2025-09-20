# Python program to generate a spirograph-like pattern using Turtle graphics.
# A spirograph is a geometric drawing toy that produces mathematical roulette curves.
# This program simulates that by moving a 'pen' attached to a 'smaller circle'
# rotating around a 'larger circle'.

import turtle
import colorsys
import time
t = turtle.Turtle()
s = turtle.Screen()
s.bgcolor('black') # Set background to black for contrast
t.speed(0)         # Fastest drawing speed
t.pensize(1)       # Thin pen for intricate details

# Countdown before starting
t.penup()
t.goto(0, 0)
t.color("white")
style = ("Arial", 20, "bold")
for i in range(15, 0, -1):
    t.clear()
    t.write(f"Starting in {i} seconds...", align="center", font=style)
    time.sleep(1)
t.clear()

# --- Spirograph Parameters ---
# R: Radius of the fixed circle (larger circle)
# r: Radius of the rotating circle (smaller circle)
# d: Distance of the pen from the center of the rotating circle
R = 150
r = 20
d = 100

# Calculate the number of rotations for the inner circle to complete a full pattern
# This ensures the pattern closes perfectly.
# Use math.gcd for greatest common divisor to simplify the ratio.
import math
gcd_val = math.gcd(R, r)
num_rotations = r // gcd_val
total_angle = 360 * (R // gcd_val) # Total angle for the outer circle to complete the pattern

h = 0 # Initial hue for color transition
num_colors = 360 # Number of color steps, usually matches total_angle for smooth transition

# Main loop to draw the spirograph
# The loop runs for a number of steps proportional to the complexity of the pattern
for i in range(0, total_angle + 1, 1):
    # Calculate current angle in radians for sine/cosine functions
    angle_rad = math.radians(i)

    # Calculate the x, y coordinates of the pen based on spirograph equations
    # These equations describe the path of a point on a smaller circle rolling inside a larger circle.
    x = (R - r) * math.cos(angle_rad) + d * math.cos(((R - r) / r) * angle_rad)
    y = (R - r) * math.sin(angle_rad) - d * math.sin(((R - r) / r) * angle_rad)

    # Convert HSV to RGB for smooth color changes
    color_hue = h / num_colors
    c = colorsys.hsv_to_rgb(color_hue, 1, 0.8)
    t.pencolor(c) # Set pen color

    # Move the turtle to the calculated position
    if i == 0:
        t.penup() # Lift pen for the first move to avoid drawing a line from origin
        t.goto(x, y)
        t.pendown() # Put pen down to start drawing
    else:
        t.goto(x, y) # Draw line to the new position

    h += 1 # Increment hue for the next step

# Keep the window open until manually closed
# turtle.done()

