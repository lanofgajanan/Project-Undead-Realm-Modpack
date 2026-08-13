# CUSTOM INSTRUCTIONS FOR AI — APOCALYPSE MODPACK PROJECT

## BEHAVIOR RULES
- **Always refer to Reddit** (r/feedthebeast, r/admincraft, r/MinecraftCommands) when unsure about mod behavior, version compatibility, or datapack syntax. Say "I'd check r/feedthebeast for this" instead of guessing.
- **Never give vague answers.** If you don't know something, say so directly and suggest where to find it.
- **Ask clarifying questions before coding** if anything is ambiguous. One question at a time.
- **State your full plan before writing any code.** No surprises.
- **Be informal and conversational.** No corporate tone.

---

## MINECRAFT VERSION — NON-NEGOTIABLE

**Version:** 1.21.1 NeoForge 21.1.229
**KubeJS:** 2101.7.2-build.368
**Pufferfish Skills:** 0.17.3

---

## CRITICAL — TAG SYSTEM (1.21.1+)

**NEVER use the old NBT tag system.** 1.21.1 uses the new component system.

### ❌ OLD (pre-1.20.5) — NEVER USE:
```mcfunction
give @s minecraft:potion{Potion:"minecraft:healing"}
give @s tacz:modern_kinetic_gun{custom_data:{GunId:"tacz:m1911"}}
```

### ✅ NEW (1.21.1+) — ALWAYS USE:
```mcfunction
give @s minecraft:potion[potion_contents={potion:"minecraft:night_vision"}]
give @s tacz:modern_kinetic_gun[custom_data={GunId:"tacz:m1911",GunCurrentAmmoCount:7,GunFireMode:"SEMI",HasBulletInBarrel:1b}]
give @s tacz:ammo[custom_data={AmmoId:"tacz:9mm"}]
```

Square brackets `[]` for components. Curly braces `{}` only inside the component value. This applies to **every single give command, recipe result, and item reference.**

---

## CRITICAL — TACZ MOD ITEM STRUCTURE

All guns are ONE base item with NBT, never standalone items:
```
tacz:modern_kinetic_gun[custom_data={GunId:"tacz:GUNNAME",...}]
```

All ammo is ONE base item:
```
tacz:ammo[custom_data={AmmoId:"tacz:AMMONAME"}]
```

**Never write** `tacz:m1911`, `tacz:pistol_ammo`, `tacz:shotgun_ammo` — these do NOT exist.

---

## CRITICAL — KUBEJS 2101 RECIPE SYNTAX

Result format uses `id` not `item`:
```javascript
// ❌ WRONG
result: { item: 'minecraft:iron_sword', count: 2 }

// ✅ CORRECT
result: { id: 'minecraft:iron_sword', count: 2 }
```

For items with components:
```javascript
result: { id: 'tacz:ammo', count: 12, components: { 'minecraft:custom_data': { AmmoId: 'tacz:9mm' } } }
```

---

## VERIFIED MOD ITEM IDS

Only use these confirmed IDs — don't assume others exist without checking:

**Guns (all use `tacz:modern_kinetic_gun[custom_data={GunId:"..."}]`):**
- `tacz:glock_17`, `tacz:m1911`, `tacz:p320`, `tacz:m9a4`
- `tacz:uzi`, `tacz:hk_mp5a5`
- `tacz:db_long`, `tacz:kar98`, `tacz:m700`
- `tacz:rhino357`

**Ammo (all use `tacz:ammo[custom_data={AmmoId:"..."}]`):**
- `tacz:9mm`, `tacz:45acp`, `tacz:357mag`, `tacz:308`, `tacz:12g`
- `tacz:762x39`, `tacz:338`, `tacz:50bmg`, and more

**Other mods:**
- `better_weaponry:iron_dagger`, `better_weaponry:iron_rapier`
- `immersiveengineering:hammer`
- `farmersdelight:bandage`
- `toughasnails:canteen` *(unverified — check with `/kubejs hand` before using)*
- `sophisticatedbackpacks:backpack`

---

## AVOID THESE MISTAKES

- Don't use `exclusive_root: true` on Remnant (common class) — only specializations use it
- Don't write recipes that can be reverse-crafted into raw materials (iron block exploit etc.)
- Don't use `advancement` triggers for kit distribution — use the tick function + player tag check system instead
- Don't stack multiple questions — ask one at a time
- Don't truncate or abbreviate code — always write complete files

---

## KEY WIKI & DOCUMENTATION LINKS

- **Pufferfish's Skills docs:** https://puffish.net/skillsmod/docs/creators
- **Pufferfish's Skills definitions format:** https://puffish.net/skillsmod/docs/creators/configuration/definition
- **Pufferfish's Skills frames:** https://puffish.net/skillsmod/docs/creators/configuration/appearance/frame
- **Pufferfish's Skills experience sources:** https://puffish.net/skillsmod/docs/creators/configuration/files/experience
- **Pufferfish's Skills kill_entity source:** https://puffish.net/skillsmod/docs/creators/configuration/experience-sources/built-in/kill-entity
- **Pufferfish's Skills attribute reward:** https://puffish.net/skillsmod/docs/creators/configuration/rewards/built-in/attribute
- **Spore Mod Wiki (main):** https://www.fungalinfectionspore.wiki
- **Spore — Calamities (bosses):** https://www.fungalinfectionspore.wiki/mobs/calamities
- **Spore — Hohlfresser:** https://www.fungalinfectionspore.wiki/mobs/calamities/hohlfresser
- **TACZ (Timeless & Classics Zero) Wiki:** https://wiki.tacz.top/en
- **KubeJS Wiki (1.21):** https://kubejs.com/wiki
- **NeoForge docs:** https://docs.neoforged.net
