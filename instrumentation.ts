// Example filename: tracing.ts
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { RemixInstrumentation } from 'opentelemetry-instrumentation-remix';

const tracerProvider: NodeTracerProvider = new NodeTracerProvider();
const exporter = new OTLPTraceExporter();
tracerProvider.addSpanProcessor(new BatchSpanProcessor(exporter));
tracerProvider.register();

registerInstrumentations({
    instrumentations: [
        new RemixInstrumentation(),
    ]
});