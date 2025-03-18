from midiutil import MIDIFile

# Create a single-track MIDI file
midi = MIDIFile(1)
track = 0
time = 0  # Start time
midi.addTrackName(track, time, "Kabira Sargam")
midi.addTempo(track, time, 100)  # Set tempo (BPM)

# Define the note mappings (F# Major Scale)
note_mapping = {
    "Sa": 54,  # F#
    "Re": 56,  # G#
    "Ga": 58,  # A#
    "Ma": 59,  # B
    "Pa": 61,  # C#
    "Dha": 63,  # D#
    "Ni": 65   # E#
}

# Sargam sequence (with durations)
sargam_sequence = [
    ("Sa", 1), ("Sa", 1), ("Sa", 1), ("Re", 1), ("Ga", 1), ("Ma", 1),
    ("Pa", 1), ("Pa", 1), ("Ma", 1), ("Ga", 1), ("Re", 1), ("Sa", 1),

    ("Pa", 1), ("Pa", 1), ("Ma", 1), ("Pa", 1), ("Dha", 1), ("Ni", 1),
    ("Sa", 1), ("Sa", 1), ("Ni", 1), ("Dha", 1), ("Pa", 1),

    ("Ni", 1), ("Ni", 1), ("Dha", 1), ("Pa", 1), ("Ma", 1), ("Ga", 1),
    ("Re", 1), ("Ga", 1), ("Ma", 1), ("Pa", 1), ("Ma", 1), ("Ga", 1), ("Re", 1),

    ("Pa", 1), ("Pa", 1), ("Ma", 1), ("Pa", 1), ("Dha", 1), ("Ni", 1),
    ("Sa", 1), ("Sa", 1), ("Ni", 1), ("Dha", 1), ("Pa", 1)
]

# Add notes to the MIDI file
channel = 0
volume = 100
current_time = 0

for note, duration in sargam_sequence:
    midi.addNote(track, channel, note_mapping[note], current_time, duration, volume)
    current_time += duration

# Save MIDI file
with open("Kabira_Sargam.mid", "wb") as midi_file:
    midi.writeFile(midi_file)

print("MIDI file created: Kabira_Sargam.mid")
