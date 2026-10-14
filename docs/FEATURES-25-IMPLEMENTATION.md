# Fuggedaboutit Radio — 25-feature implementation tracker

All features requested. **Tracking is not implementation.** Audit upstream CoreScope before writing duplicate functionality. Preserve existing routes, data model, tests and GPL licensing.

## Stage A: Intel Mac foundation
- [ ] 1. USB radio auto-detection
- [ ] 2. One-click radio connection
- [ ] 3. Automatic reconnection
- [ ] 10. macOS notifications
- [ ] 15. macOS menu bar monitor
- [ ] 19. Multi-radio monitoring
- [ ] 21. Secure configuration storage
- [ ] 24. Automatic updates

## Stage B: Reliability and operations
- [ ] 5. Network health alerts
- [ ] 8. Network troubleshooter
- [ ] 11. Message notifications
- [ ] 22. Built-in diagnostics
- [ ] 25. Backup and restore

## Stage C: Network intelligence
- [ ] 4. Offline maps
- [ ] 6. Signal history
- [ ] 7. Live node tracking
- [ ] 9. Coverage heatmaps
- [ ] 12. Network route visualization
- [ ] 13. Offline packet recording
- [ ] 14. Packet replay
- [ ] 17. Anomaly detection
- [ ] 18. Duplicate packet detection

## Stage D: Data and sharing
- [ ] 16. Export reports
- [ ] 20. Multi-region monitoring
- [ ] 23. QR code sharing

## Definition of done (each feature)
- Audit existing CoreScope capability and integration points.
- Implement with configuration, error states, security and privacy protections.
- Add automated tests and user documentation.
- Verify existing MQTT ingestion, map, analytics and route behavior.
- Test on an Intel Mac running Tahoe for native integrations.
- Merge only after CI passes; include in release notes only after verification.

## Critical technical boundaries
- A direct USB radio needs a compatible MeshCore transport/ingestion adapter; CoreScope's MQTT observer architecture does not automatically imply USB support.
- Offline maps must respect tile-provider terms and attribution.
- Coverage maps, route estimates and packet-loss estimates must distinguish observations from inference.
- Desktop auto-updates and Keychain require a native app architecture; do not imply they work in the existing browser UI.
- Keep secret keys out of logs, QR exports and public diagnostic reports.
