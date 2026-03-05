# Sky Salt Cafe & Bistro

## Current State
The workspace contains a Mairu Bistro restaurant website with 9 sections: Hero, About, Signature Dishes, Experience, Reviews, Gallery, Reservation, Location, and Footer. It uses React + TypeScript + Tailwind CSS with Framer Motion animations and a Motoko backend for reservation form submissions.

## Requested Changes (Diff)

### Add
- New brand identity: Sky Salt Cafe & Bistro
- New tagline: "A Cozy Escape for Great Food & Conversations"
- New menu items: Peri Peri Chicken Pizza, Chicken Dim Sum, White Sauce Pasta, Jalapeño Kebabs, Alfredo Penne Pasta, Chicken Fingers, Chilli Cheese Toast, Mocha
- New contact: Phone +91 89192 96510, Address Road No. 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033
- Opening hours: 11:00 AM – 11:00 PM
- Rating: 4.6 stars from 1075 reviews
- Services: Dine-in, Takeaway, Delivery
- New AI-generated imagery: hero background, food cards, gallery grid (food, coffee, outdoor seating, interior)
- Terracotta/olive green accent color scheme with deep charcoal and warm cream

### Modify
- All brand references from Mairu Bistro → Sky Salt Cafe & Bistro
- Color palette: deep charcoal primary, warm cream secondary, terracotta/olive green accent
- Menu section: replace all dishes with Sky Salt highlights
- Reviews section: update to 4.6★ / 1075 reviews with new testimonial copy
- Experience section: outdoor seating under warm lights, cozy aesthetic, friendly service, evening hangouts/dates
- About section: relaxed bistro in Jubilee Hills, cozy/aesthetic dining, evenings/dates/casual meetups
- Location section: update address and map embed
- Footer: update all contact details and opening hours

### Remove
- All Mairu Bistro branding, Telugu name, LGBTQ+ note, old menu items, old address/phone

## Implementation Plan
1. Rename project to Sky Salt Cafe & Bistro
2. Generate AI images: hero bg, 6 food card images, 8 gallery images (food/coffee/outdoor/interior)
3. Update Motoko backend reservation handler (restaurant name, contact info)
4. Rebuild all frontend sections with new brand, content, color tokens, and generated images
5. Apply Framer Motion scroll animations, sticky navbar, hover effects
6. Ensure mobile-first responsive layout across all sections
